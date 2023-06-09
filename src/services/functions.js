import { baseURL, api } from '@/api';

export const getSubjects = async () => {
    return new Promise((resolve, reject) => {
        api.get(baseURL + '/subject', {})
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

export const deleteUser = async (id) => {
    return new Promise((resolve, reject) => {
        api.delete(baseURL + '/users/' + id)
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

