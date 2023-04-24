import { baseURL, api } from '@/api';

export const login = async (email, password) => {
    return new Promise((resolve, reject) => {
        api.post('/auth/login', { email, password })
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

export const refresh = async () => {
    return new Promise((resolve, reject) => {
        api.post(baseURL + '/auth/refresh', {})
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

export const getUser = async () => {
    return new Promise((resolve, reject) => {
        api.get(baseURL + '/users/profile', {})
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}


export const logout = () => {
    sessionStorage.removeItem('tk');
    // window.router.push('/login');
    window.location.replace('/login');
}