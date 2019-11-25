import Vue from 'vue';
import Vuex from 'vuex';
import savedPlaces from '@/store/modules/savedPlaces';

Vue.use(Vuex);

export default new Vuex.Store({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: {
        savedPlaces
    }
});
