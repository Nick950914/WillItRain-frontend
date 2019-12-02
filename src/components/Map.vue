<template>
    <div>
        <div>
            <h2>Search and add a location</h2>
            <label>
                <gmap-autocomplete
                        @place_changed="setPlace">
                </gmap-autocomplete>
                <button @click="addMarker">Add</button>
            </label>
            <br/>
<!--        <ul v-for="(place, index) in places">-->
<!--            <p>Location #{{index += 1}}-->
<!--                Location name: {{place.address_components[0].long_name}}-->
<!--                <br>-->
<!--                lat: {{place.geometry.location.lat()}}-->
<!--                <br>-->
<!--                lng: {{place.geometry.location.lng()}}-->
<!--            </p>-->
<!--        </ul>-->
        </div>
        <br>
        <gmap-map
                :center="center"
                :zoom="12"
                style="width:100%;  height: 400px;"
        >
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
            ></gmap-marker>
        </gmap-map>
    </div>

<!--        <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="5">-->
<!--            <GmapMarker-->
<!--                    v-for="(item, index) in markers"-->
<!--                    :key="index"-->
<!--                    :position="item.position"-->
<!--                    :clickable="true"-->
<!--                    :draggable="true"-->
<!--                    @click="center = item.position"-->
<!--            />-->
<!--        </GmapMap>-->
</template>

<script>
export default {
    data() {
        return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
            center: { lat: 45.508, lng: -73.587 },
            markers: [],
            places: [],
            currentPlace: null
        };
    },

    mounted() {
        this.geolocate();
    },

    methods: {

        // getMarkers() {
        //   this.$store.getters.
        // },
        // receives a place object via the autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                };
                this.$store.dispatch('savedPlaces/addMarker', { position: marker});
                // this.markers.push({ position: marker });
                console.log(this.getMarkers);
                this.places.push(this.currentPlace);
                this.center = marker;
                this.$store.dispatch('savedPlaces/addPlace', this.currentPlace);
                // this.$toasted.show('Place added successfully to your saved places!', {
                //     duration: 4500,
                //     type: 'success',
                // });
                console.log(this.currentPlace);
                this.currentPlace = null;



            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }
    },

    computed: {
        getMarkers() {
            return this.$store.getters['savedPlaces/getMarkers'];
        }
    },

    created() {
        this.markers = this.getMarkers;
    }
    // data() {
    //   return {
    //     center: { lat: -3.350235, lng: 111.995865 },
    //     mapTypeId: "terrain",
    //     markers: [
    //       { position: { lat: -0.48585, lng: 117.1466 } },
    //       { position: { lat: -6.9127778, lng: 107.6205556 } }
    //     ]
    //   };
    // }
};
</script>

<style lang="scss" scoped>
    .vue-map-container {
        height: 450px;
        max-width: 992px;
        width: 100%;
        margin: auto;
    }
</style>
