import Vue from 'vue';
import App from './App.vue';
// import VueResource from 'vue-resource';
import './registerServiceWorker';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate'
import Toasted from 'vue-toasted';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyADui5K_t9RuRBF00nBguQ3Uz-91vMCsV4',
        libraries: 'places',
    },
});

// Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(Toasted);



Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
