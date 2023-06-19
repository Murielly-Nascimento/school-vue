import { baseURL, api } from '@/api';

const orders = {
    asc: 1,
    desc: 2
}


export const getResourceById = (id) => {
    return new Promise((resolve, reject) => {
        if (isNaN(id)) reject(new Error('O id informado precisa ser um número inteiro positivo'));
        api.get(baseURL + '/resources/' + id, {})
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

export const getResources = () => {
    return new Promise((resolve, reject) => {
        api.get(baseURL + '/resources', {})
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

export const getResourcesPage = ({ pagination, filters = {} }) => {
    const options = {
        params: {    
            // orderBy: pagination.orderBy,
            // orderDirection: pagination.orderDirection,
            order: orders[pagination.orderDirection],
            page: pagination.page,
            take: pagination.per_page,
        }
    }

    Object.assign(options.params, { filters });
    return new Promise((resolve, reject) => {
        api.get(baseURL + '/resources/paginated', options)
            .then(response => {
                resolve(response.data)
            })
            .catch(errors => {
                reject(errors.response?.data || errors)
            })
    })
}

