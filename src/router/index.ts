import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/auth/Login.vue';
import Signup from '../components/auth/Signup.vue';
import Map from '../components/Map.vue';
import SavedPlaces from '../components/SavedPlaces';
import WeatherPrediction from '../components/WeatherPrediction';
import PageNotFound from '../components/PageNotFound';

import store from '../store/modules/auth'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/login',
        name: 'login',
        component: Login, beforeEnter(to, from, next) {
            if (store.state.authenticated) {
                next('/map')
            } else {
                next()
            }
        }
    },

    {
        path: '/signup',
        name: 'signup',
        component: Signup, beforeEnter(to, from, next) {
            if (store.state.authenticated) {
                next('/map')
            } else {
                next()
            }
        }
    },

    {
        path: '/map',
        name: 'map',
        component: Map, beforeEnter(to, from, next) {
            if (store.state.authenticated) {
                next()
            } else {
                next('/login')
            }
        }
    },

    {
        path: '/saved',
        name: 'saved',
        component: SavedPlaces, beforeEnter(to, from, next) {
            if (store.state.authenticated) {
                next()
            } else {
                next('/login')
            }
        }
    },

    {
        path: '/prediction/:place',
        name: 'prediction',
        component: WeatherPrediction, beforeEnter(to, from, next) {
            if (store.state.authenticated) {
                next()
            } else {
                next('/login')
            }
        }
    },

    {
        path: '*',
        name: 'pagenotfound',
        component: PageNotFound
    }


    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
