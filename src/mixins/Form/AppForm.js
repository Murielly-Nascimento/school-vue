import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import { api, baseURL } from '@/api';
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';

export default {
    setup() {
    },
    props: {
        action: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            form: {},
            redirectTo: '',
            submiting: false,
        }
    },
    beforeCreate() {
        configure({
            generateMessage: localize({ pt_BR }),
        });
    },
    methods: {
		onSubmit() {
            this.submiting = true;
            api.post(this.action, this.form)
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
        }
    },
}