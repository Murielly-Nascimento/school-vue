import { SessionHelper } from "@/helpers";
import { getUser } from '@/services';
import { useUser } from '@/store';
import { UnauthorizedException } from "@/exceptions";
import { refresh } from '@/services'

const GerenciarAcesso = {
	token: null,
	userData: null,
	async validateAccess() {
		this.checkToken(SessionHelper.getDecodedItem('tk'))
			.then(token => this.getAccess(token))
			.catch(error => this.unauthorize(error));
	},
	getAccess(token) {
		this.updateToken(token);
	},
	unauthorize(error) {
		SessionHelper.remove("token");
		error.abort();
	},
	getToken() {
		return this.token;
	},
	setToken(token) {
		this.token = token;
	},
	saveToken(token) {
		this.setToken(token);
		SessionHelper.setEncodedItem(token);
	},
	hasToken() {
		return this.token != null && this.token != undefined;
	},
	updateToken(token) {
		refresh()
			.then(response => {
				this.saveToken(response.data);
			})
			.catch(error => {
				this.saveToken(token);
			})
	},
	async checkToken(token) {
		return new Promise((resolve, reject) => {
			this.setToken(token);
			if (!this.hasToken()) {
				reject(UnauthorizedException.create('Não autorizado'));
			}
			this.isValid().then(response => {
				if (!response) {
					return reject(UnauthorizedException.create('Não autorizado'));
				}
				return resolve(token);
			})
		});
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
