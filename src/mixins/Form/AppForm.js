import _ from 'lodash';
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import { api } from '@/api';
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';

export default {
    setup() {
    },
    props: {
        action: {
            type: String,
            required: true,
        },
        data: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        responsiveBreakpoint: {
            type: Number,
            default: 850
        }
    },
    data() {
        return {
            form: {},
            redirectTo: '',
            submiting: false,
            mediaCollections: [],
            dimensions: {
                w: window.innerWidth,
                h: window.innerHeight,
            },
            onSmallScreen: window.innerWidth < this.responsiveBreakpoint,
        }
    },
    filters: {
        date: function date(date) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';

            var date = (0, _moment2.default)(date);
            return date.isValid() ? date.format(format) : "";
        },
        datetime: function datetime(_datetime) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

            var date = (0, _moment2.default)(_datetime);
            return date.isValid() ? date.format(format) : "";
        },
        time: function time(_time) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm:ss';

            // '2000-01-01' is here just because momentjs needs a date
            var date = (0, _moment2.default)('2000-01-01 ' + _time);
            return date.isValid() ? date.format(format) : "";
        }
    },
    beforeCreate() {
        configure({
            generateMessage: localize({ pt_BR }),
        });
    },
    created() {
        if (!_.isEmpty(this.data)) {
            this.form = this.data;
        }
        window.addEventListener('resize', this.onResize);
    },
    methods: {
        getPostData() {
            if (this.mediaCollections) {
                this.mediaCollections.forEach(collection => {
                    if (this.form[collection]) {
                        console.warn("MediaUploader warning: Media input must have a unique name, '" + collection + "' is already defined in regular inputs.");
                    }
        
                    if (this.$refs[collection + '_uploader']) {
                        this.form[collection] = this.$refs[collection + '_uploader'].getFiles();
                    }
                });
            }
      
            return this.form;
        },
		onSubmit() {
            this.submiting = true;
            api.post(this.action, this.getPostData())
                .then(response => {
                    this.onSuccess(response.data)
                })
                .catch(errors => {
                    this.onFail(errors.response?.data || errors)
                })
		},
        onSuccess(data) {
            this.submiting = false;

            console.log(data);
            if (this.redirectTo.length) {
                window.location.replace(this.redirectTo);
            }
        },
        onFail(data) {
            this.submiting = false;

            console.error(data);
        },
        onResize() {
            this.onSmallScreen = window.innerWidth < this.responsiveBreakpoint,
            this.dimensions = {
                w: window.innerWidth,
                h: window.innerHeight,
            };
        },
    },
}