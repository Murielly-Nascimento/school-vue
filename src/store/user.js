import { defineStore } from 'pinia'
import { getUser } from '@/services';
// import { useSession } from '@/helpers';

export const useUser = defineStore('user', {
    state: () => ({
        user: null,
        // session: useSession(),
    }),
    getters: {
        getUser(state) {
            return state.user
        },
    },
    actions: {
        async loadUser () {
            const res = await getUser()
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