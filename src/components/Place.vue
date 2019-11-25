<template>
    <div class="mb-3">
        <b-card
                :title="place"
        >
<!--            <b-card-text>-->
<!--                Some quick example text to build on the card title and make up the bulk of the card's content.-->
<!--            </b-card-text>-->

            <router-link :to="{ name: 'prediction', params: { place }}"><b-button  class="mr-2"variant="primary">View Weather Prediction</b-button></router-link>
            <b-button variant="danger" @click="removePlace">X</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['place', 'index'],
    methods: {
        removePlace(place, index) {
            if (confirm('Are you sure you want to delete this location from your saved locations?')) {
                this.$store.dispatch('savedPlaces/removePlace', this.index);
                this.$toasted.show('Saved place has been removed.', {
                    duration: 4500,
                    type: 'success',
                });
            } else {
                return;
            }
        }
    }
}
</script>
