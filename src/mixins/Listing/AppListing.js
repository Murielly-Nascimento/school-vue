import _ from 'lodash';
import { dayjs } from '@/dayjs';
import { api } from '@/api';
import { SPagination, STooltip, STable } from '@/components';

export default {
    components: {
        STable,
        STooltip,
        SPagination,
    },
    props: {
        url: {
            type: String,
            required: true
            // default: '',
        },
        data: {
            type: Object,
            default: function _default() {
                return null;
            }
        },
        timezone: {
            type: String,
            required: false,
            default: function _default() {
                return "America/Fortaleza";
            }
        },
        trans: {
            required: false,
            default: function _default() {
                return {
                    duplicateDialog: {
                        title: 'Atenção!',
                        text: 'Você realmente deseja duplicar este item?',
                        yes: 'Sim, duplicar.',
                        no: 'Não, cancelar.',
                        success_title: 'Sucesso!',
                        success: 'Item duplicado com sucesso.',
                        error_title: 'Erro!',
                        error: 'Ocorreu um erro.'
                    },
                    deleteDialog: {
                        title: 'Atenção!',
                        text: 'Você realmente deseja excluir este item?',
                        yes: 'Sim, deletar.',
                        no: 'Não, cancelar.',
                        success_title: 'Sucesso!',
                        success: 'Item excluído com sucesso.',
                        error_title: 'Erro!',
                        error: 'Ocorreu um erro.'
                    },
                    changeDialog: {
                        success_title: 'Sucesso!',
                        success: 'Item alterado com sucesso.',
                        error_title: 'Erro!',
                        error: 'Ocorreu um erro.'
                    }
                };
            }
        }
    },
    data() {
        return {
            pagination: {
                state: {
                    per_page: this.$cookies.get('per_page') || 10, // required
                    current_page: 1, // required
                    last_page: 1, // required
                    from: 1,
                    to: 10 // required
                },
            },
            orderBy: {
                column: 'id',
                direction: 'asc'
            },
            filters: {},
            search: '',
            collection: null,
            now: (0, dayjs)().tz(this.timezone).format('YYYY-MM-DD HH:mm:ss'),
            datetimePickerConfig: {
                enableTime: true,
                time_24hr: true,
                enableSeconds: true,
                dateFormat: 'Y-m-d H:i:S',
                altInput: true,
                altFormat: 'd.m.Y H:i:S',
                locale: null,
                inline: true
            },
        };
    },
    created() {
        if (this.data != null) {
            this.populateCurrentStateAndData(this.data);
        } else {
            this.loadData();
        }

        setInterval(() => {
            this.now = (0, dayjs)().tz(this.timezone).format('YYYY-MM-DD HH:mm:ss');
        }, 1000);
    },
    filters: {
        date: function date(date) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';

            var date = (0, dayjs)(date);
            return date.isValid() ? date.format(format) : "";
        },
        datetime: function datetime(_datetime) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

            var date = (0, dayjs)(_datetime);
            return date.isValid() ? date.format(format) : "";
        },
        time: function time(_time) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm:ss';

            // '2000-01-01' is here just because momentjs needs a date
            var date = (0, dayjs)('2000-01-01 ' + _time);
            return date.isValid() ? date.format(format) : "";
        }
    },
    methods: {
        bulkDelete(url) {
            const self = this;
            const itemsToDelete = (0, _.keys)((0, _.pickBy)(this.bulkItems));

            this.$modal.show('dialog', {
                title: 'Warning!',
                text: 'Você realmente deseja excluir ' + this.clickedBulkItemsCount + ' itens selecionados ?',
                buttons: [
                    { title: 'Não, cancelar.' },
                    {
                        title: '<span class="btn-dialog btn-danger">Sim, deletar.</span>',
                        handler: function handler() {
                            const data = { ids: itemsToDelete }
                            
                            self.$modal.hide('dialog');
                            axios.post(url, { data })
                                .then((response) => {
                                    self.bulkItems = {};
                                    self.loadData();
                                    self.$notify({
                                        type: 'success',
                                        title: self.trans.deleteDialog.success_title,
                                        text: response.data.message ?
                                            response.data.message : self.trans?.deleteDialog?.success
                                    });
                                }).catch((error) => {
                                    self.$notify({
                                        type: 'error',
                                        title: self.trans.deleteDialog.error_title,
                                        text: error.response.data.message ?
                                            error.response.data.message : self.trans?.deleteDialog?.error
                                    });
                                });
                    }
                }]
            });
        },
        loadData(resetCurrentPage) {
            const options = {
                params: {
                    perPage: this.pagination.state.per_page,
                    page: this.pagination.state.current_page,
                    orderBy: this.orderBy.column,
                    orderDirection: this.orderBy.direction,
                    filters: this.filters,
                }
            };

            if (resetCurrentPage === true) {
                options.params.page = 1;
            }

            // Object.assign(options.params, this.filters);

            api.get(this.url, options)
                .then((response) => {
                    return this.populateCurrentStateAndData(response.data.data);
                }).catch((error) => {
                    return this.alertLoadDataError(error.response?.data);
                });
        },
        filter(column, value) {
            if (value == '') {
                delete this.filters[column];
            } else {
                this.filters[column] = value;
            }
            // when we change filter, we must reset pagination, because the total items count may has changed
            this.loadData(true);
          
        },
        populateCurrentStateAndData(object) {
            if (object.current_page > object.last_page && object.total > 0) {
                this.pagination.state.current_page = object.last_page;
                this.loadData();
                return;
            }

            this.collection = object.data;
            this.pagination.state.current_page = object.current_page;
            this.pagination.state.last_page = object.last_page;
            this.pagination.state.total = object.total;
            this.pagination.state.per_page = object.per_page;
            this.pagination.state.to = object.to;
            this.pagination.state.from = object.from;
        },
        alertLoadDataError(error) {
            this.$notify({
                type: 'error',
                title: 'Erro!',
                text: 'Erro ao carregar dos dados da API! Tente recarregar a página',
            });
            console.error(error);
        },
        deleteItem(url) {
            const self = this;
            this.$modal.show('dialog', {
                title: 'Atenção!',
                text: this.trans?.deleteDialog?.text || 'Você realmente deseja excluir este item?',
                buttons: [
                    { title: 'Não, cancelar.' },
                    {
                        title: '<span class="btn-dialog btn-danger">Sim, deletar.</span>',
                        handler: function handler() {
                            self.$modal.hide('dialog');
                            api.delete(url)
                                .then(function (response) {
                                    self.loadData();
                                    self.$notify({
                                        type: 'success',
                                        title: self.trans.deleteDialog.success_title,
                                        text: response.data.message ?
                                            response.data.message : self.trans?.deleteDialog?.success
                                    });
                                }).catch((error) => {
                                    self.$notify({
                                        type: 'error',
                                        title: self.trans.deleteDialog.error_title,
                                        text: error.response.data.message ?
                                            error.response.data.message : self.trans?.deleteDialog?.error
                                    });
                                });
                    }
                }]
            });
        },
        toggleSwitch(url, col, row) {
            api.post(url, row)
                .then((response) => {
                    this.$notify({
                        type: 'success',
                        title: this.trans.changeDialog.success_title,
                        text: response.data.message ?
                            response.data.message : this.trans.changeDialog.success
                    });
                })
                .catch((error) => {
                    row[col] = !row[col];
                    this.$notify({
                        type: 'error',
                        title: this.trans.changeDialog.error_title,
                        text: error.response.data.message ?
                            error.response.data.message : this.trans.changeDialog.error
                    });
                });
        },
    }
}