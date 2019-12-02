import Vue from 'vue';
import Vuex from 'vuex';
import savedPlaces from '@/store/modules/savedPlaces';
import auth from '@/store/modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: {
        savedPlaces,
        auth
    }
});
