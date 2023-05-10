import { useSession } from "@/helpers";
import { getUser } from '@/services';
import { useUser } from '@/store';
import { UnauthorizedException } from "@/errors";
import { refresh } from '@/services';

const session = useSession();

export const access = {
	token: null,
	userData: null,
}

export const validateAccess = async() => {
	checkToken(session.getDecodedItem('tk'))
		.then(token => getAccess(token))
		.catch(error => unauthorize(error));
}

export const getAccess = (token) => {
	updateToken(token);
}

export const unauthorize = (error) => {
	session.remove("token");
	error.abort();
}

export const getToken = () => {
	return access.token;
}

export const setToken = (token) => {
	access.token = token;
}

export const saveToken = (token) => {
	setToken(token);
	session.setEncodedItem('tk', token);
}

export const hasToken = () => {
	return access.token != null && access.token != undefined;
}

export const updateToken = (token) => {
	refresh()
		.then(response => {
			saveToken(response);
		})
		.catch(error => {
			saveToken(token);
		})
}

export const checkToken = async (token) => {
	return new Promise((resolve, reject) => {
		setToken(token);
		if (!hasToken()) {
			reject(UnauthorizedException.create('Não autorizado'));
		}
		isValid().then(response => {
			if (!response) {
				return reject(UnauthorizedException.create('Não autorizado'));
			}
			return resolve(token);
		})
	});
}

export const isValid = async () => {
	try {
		const store = useUser();
		access.userData = await getUser();

		store.$patch({ user: access.userData });
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
}