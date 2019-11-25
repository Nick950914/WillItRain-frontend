<template>
<h1 class="mt-5">{{place}}</h1>
</template>

<script>
export default {
    name: 'WeatherPrediction',
    data() {
        return {
            place: this.$route.params.place
        }
    }
};
</script>

<style scoped>

</style>
