<template>
    <div>
        <h1 class="mt-5" v-if="places.length === 0">Whoops! It appears you have no saved locations! Maybe <router-link to="/map">add</router-link> some right now?</h1>
        <Place v-for="(place, index) in places" :place="place" :index="index"></Place>
    </div>
</template>

<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapGetters } = createNamespacedHelpers("savedPlaces");
import { mapGetters } from 'vuex';
//import { createNamespacedHelpers } from "vuex";
//import axios from 'axios';
// import { Component, Prop, Vue } from "vue-property-decorator";
//
// @Component
// export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;
// }
import Place from './Place';

export default {
    data() {
        return {

        };
    },
    components: {
        Place
    },
    computed: {
        places() {
            return this.$store.getters['savedPlaces/places'];
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h1 {
        font-weight: bold;
    }

    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #24b900;
        text-decoration: none !important;
    }


</style>
