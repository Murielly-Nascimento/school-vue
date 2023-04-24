import { SessionHelper } from "@/helpers";
import { getUser } from '@/services';
import { useUser } from '@/store';

const GerenciarAcesso = {
	token: null,
	userData: null,
	async check() {
		this.setToken(SessionHelper.getDecodedItem('tk'));
		if (!(await this.validateToken())) {
			this.accessOrDie();
		}

		this.saveToken(this.token);
	},
	accessOrDie() {
		this.resetToken();
		location.replace('/login');
	},
	saveToken(token) {
		window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
	},
	resetToken() {
		SessionHelper.remove("token");
	},
	getToken() {
		return this.token;
	},
	setToken(token) {
		this.token = token;
	},
	hasToken() {
		return this.token != null && this.token != undefined;
	},
	async validateToken() {
		return this.hasToken() && (await this.isValid());
	},
	async isValid() {
		try {
			const store = useUser()
			this.userData = await getUser();

			store.$patch({ user: this.userData });
			return true;
		} catch (e) {
			console.error(e);
			return false;
		}
	},
};

export default GerenciarAcesso;
