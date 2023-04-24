import { defineStore } from 'pinia'
import { SessionHelper } from '@/helpers';
import { getUser } from '@/services';

export const useUser = defineStore('user', {
    state: () => ({
        user: null,
    }),
    getters: {
        getUser(state) {
            return state.user
        },
    },
    actions: {
        async loadUser () {
            const access_token = SessionHelper.getDecodedItem('tk');
            const res = await getUser(id)
            this.updateUser(res)
        },
        updateUser (payload) {
            this.user = payload
        },
        clearUser () {
            this.$reset()
        }
    }
});