<template>
    <!-- <div v-if="items.length"> -->
        <table-lite
            :has-checkbox="hasBulk"
            :is-loading="isLoading"
            :is-re-search="isReSearch"
            :columns="columns"
            :rows="rows"
            :total="totalRecordCount"
            :sortable="sortable"
            :messages="messages"
            @do-search="doSearch"
            @is-finished="tableLoadingFinish"
            @return-checked-rows="updateCheckedRows"
        ></table-lite>
    <!-- </div> -->
</template>

<script>
import VueTableLite from 'vue3-table-lite';
export default {
    name: "STable",
    components: {
        TableLite: VueTableLite
    },
    props: {
        headers: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        items: {
            type: Array,
            default: function _default() {
                return this.$parent.collection;
            }
        },
        hasBulk: {
            type: Boolean,
            default: false
        },
        pagination: {
            type: Object,
            default: function _default() {
                return this.$parent.pagination;
            }
        },
        orderBy: {
            type: Object,
            default: function _default() {
                return this.$parent.orderBy;
            }
        }
    },
    data() {
        return {
            isLoading: false,
            isReSearch: false,
            columns: [
                {
                    label: "ID",
                    field: "id",
                    width: "3%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Name",
                    field: "name",
                    width: "10%",
                    sortable: true,
                },
                {
                    label: "Email",
                    field: "email",
                    width: "15%",
                    sortable: true,
                },
                {
                    label: "",
                    field: "quick",
                    width: "10%",
                },
            ],
            rows: [],
            totalRecordCount: 0,
            sortable: {
                order: "id",
                sort: "desc",
            },
            messages: {
                pagingInfo: "Exibindo {0}-{1} de {2}",
                pageSizeChangeLabel: "Nº de linhas: ",
                gotoPageLabel: "\tIr para:\t",
                noDataAvailable: "Vazio",
            },
        }
    },
    mounted() {
        this.doSearch(0, 10, "id", "desc");
    },
    methods: {
        sampleData1(offst, limit) {
            offst = offst + 1;
            let data = [];
            for (let i = offst; i <= limit; i++) {
                data.push({
                    id: i,
                    name: "TEST" + i,
                    email: "test" + i + "@example.com",
                });
            }
            return data;
        },
        sampleData2(offst, limit) {
            let data = [];
            for (let i = limit; i > offst; i--) {
                data.push({
                    id: i,
                    name: "TEST" + i,
                    email: "test" + i + "@example.com",
                });
            }
            return data;
        },
        doSearch(offset, limit, order, sort) {
            this.isLoading = true;
            setTimeout(() => {
                this.isReSearch = offset == undefined ? true : false;
                if (offset >= 10 || limit >= 20) {
                    limit = 20;
                }
                if (sort == "asc") {
                    this.rows = this.sampleData1(offset, limit);
                } else {
                    this.rows = this.sampleData2(offset, limit);
                }
                this.totalRecordCount = 1000;
                this.sortable.order = order;
                this.sortable.sort = sort;
            }, 600);
        },
        tableLoadingFinish(elements) {
            this.isLoading = false;
            Array.prototype.forEach.call(elements, function (element) {
                if (element.classList.contains("name-btn")) {
                    element.addEventListener("click", function () {
                        console.log(this.dataset.id + " name-btn click!!");
                    });
                }
                if (element.classList.contains("quick-btn")) {
                    element.addEventListener("click", function () {
                        console.log(this.dataset.id + " quick-btn click!!");
                    });
                }
            });
        },
        updateCheckedRows(rowsKey) {
            console.log(rowsKey);
        }

    },
}
</script>
    
<style scoped lang="scss">
.vtl-card {
    background-color: #0a223c;
}
</style>
    
<style lang="scss">
.vtl-card {
    .vtl-table {
        thead {
            th {
                color: #fff;
                background-color: #080b0e;
                border-color: #454d55;
                border-bottom: 2px solid #dee2e6;
                font-family: "Garet";
            }
        }

        td {
            color: white;
            font-family: "Garet";

            * {
                color: white !important;
                font-family: "Garet";
            }
        }
    }

    .vtl-table-hover tbody tr:hover {
        color: #051525 !important;
        background-color: #ececec;

        td {
            color: #051525;
            font-weight: 900;

            * {
                color: #051525 !important;
                font-weight: 900;
            }
        }
    }

    .vtl-paging {
        .vtl-paging-info [role="status"],
        .vtl-paging-count-label,
        .vtl-paging-page-label {
            color: white !important;
        }
    }

    select.vtl-paging-count-dropdown,
    select.vtl-paging-page-dropdown {
        border-radius: 10px;
        border: none;
        outline: none;
        padding: 4px;
    }

    .vtl-pagination {
        .vtl-paging-pagination-page-li .vtl-paging-pagination-page-link {
            display: flex;
            justify-content: center;
            background-color: #0a223c;
            color: white !important;
            border-radius: 50%;
            margin-left: 5px;
            margin-right: 5px;
            width: 36px;
            aspect-ratio: 1;
        }
    }

    @media (max-width: 899px) {
        .vtl-paging-info {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .vtl-paging-change-div,
        .vtl-paging-pagination-div {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .vtl-paging-pagination-div {
            margin-top: 10px;
        }
    }

    @media (min-width: 900px) {
        .vtl-paging-info {
            -webkit-box-ordinal-group: 13;
            order: 2;
            flex: 0 0 100%;
            max-width: 100%;
        }
    
        .vtl-paging-change-div,
        .vtl-paging-pagination-div {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
}
</style>