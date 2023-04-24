import axios from 'axios';

window.axios = axios;


window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
window.axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,PATCH,DELETE';
// window.axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
// window.axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
	window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
	console.warn('O token que define a validade de seu formulário não foi configurado');
}
