import axios from 'axios';
import router from '../../router/index';

export default {
    namespaced: true,
    state: {
        authenticated: false,
        activeUser: null
    },

    getters: {
        isAuthenticated(state) {
            return state.authenticated;
        }
    },

    mutations: {
        authUser(state, payload) {
            state.authenticated = true,
            state.activeUser = payload;
            console.log(state.activeUser);
            console.log('authenticated!', state.authenticated);
        },

        logout(state) {
            state.authenticated = false;
            state.activeUser = null;
            localStorage.removeItem('activeUser');
            localStorage.removeItem('expirationDate');
            router.push('/login');
            console.log(state.authenticated);
        }
    },

    actions: {
        register(context, payload) {
            axios.post('http://0.0.0.0:4567/api/register', payload)
                .then(res => {
                    let login = payload.login;
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + 3600 * 1000);
                    if (res.status === 200) {
                        context.commit('authUser', login);
                        localStorage.setItem('activeUser', context.state.activeUser);
                        // @ts-ignore
                        localStorage.setItem('expirationDate', expirationDate);
                        context.dispatch('setLogoutTimer', 3600);
                        router.push('/map');
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },

        login(context, payload) {
            axios.post('http://0.0.0.0:4567/api/loging', payload)
                .then(res => {
                    let login = payload.login;
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + 3600 * 1000);
                    if (res.status === 200) {
                        context.commit('authUser', login);
                        localStorage.setItem('activeUser', context.state.activeUser);
                        // @ts-ignore
                        localStorage.setItem('expirationDate', expirationDate);
                        context.dispatch('setLogoutTimer', 3600);
                        router.push('/map');
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },

        tryAutoLogin(context) {
            const activeUser = localStorage.getItem('activeUser');
            if (!activeUser) {
                return;
            }
            const expirationDate = localStorage.getItem('expirationDate');
            const now = new Date();
            // @ts-ignore
            if (now >= expirationDate) {
                return;
            }
            context.commit('authUser', activeUser);
        },

        setLogoutTimer(context, expirationTime) {
            setTimeout(() => {
                context.commit('logout');
            }, expirationTime * 1000)
        }
    }
};
