<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand><router-link to="/"><span style="color: white;">Will It Rain?</span></router-link></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
<!--                    <b-nav-item href="#">Login</b-nav-item>-->
<!--                    <b-nav-item href="#">Register</b-nav-item>-->
                    <b-nav-item v-if="auth"><router-link to="/map">Map</router-link></b-nav-item>
                    <b-nav-item v-if="auth"><router-link to="/saved">Saved Places</router-link></b-nav-item>
                    <b-nav-item class="logout" v-if="auth" @click="logout"><router-link to="/login">Logout</router-link></b-nav-item>
                    <b-nav-item v-if="!auth"><router-link to="/login">Login</router-link></b-nav-item>
                    <b-nav-item v-if="!auth"><router-link to="/signup">Signup</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    computed: {
        auth() {
            return this.$store.getters['auth/isAuthenticated'];
        }
    },

    methods: {
        logout() {
            this.$store.commit('auth/logout');
        }
    }
};
</script>

<style scoped>
    nav a {
        font-size: 1.2em;
        font-weight: bold;
        color: #fff !important;
        text-decoration: none;
    }

    nav a:hover {
        color: black !important;
    }

    nav a.router-link-active {
        color: black !important;
    }

    nav span:hover {
        color: black !important;
    }

</style>
