import { baseURL, api } from '@/api';

export const getProfessors = async () => {
    return new Promise((resolve, reject) => {
        api.get(baseURL + '/professors', {})
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

