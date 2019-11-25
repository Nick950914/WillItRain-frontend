import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/auth/Login.vue';
import Signup from '../components/auth/Signup.vue';
import Map from '../components/Map.vue';
import SavedPlaces from '../components/SavedPlaces';
import WeatherPrediction from '../components/WeatherPrediction';
import PageNotFound from '../components/PageNotFound';

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
        component: Login
    },

    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },

    {
        path: '/map',
        name: 'map',
        component: Map
    },

    {
        path: '/saved',
        name: 'saved',
        component: SavedPlaces
    }  ,

    {
        path: '/prediction/:place',
        name: 'prediction',
        component: WeatherPrediction
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
