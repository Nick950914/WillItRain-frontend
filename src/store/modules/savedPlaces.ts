import axios from 'axios';
// import router from '@/router';

export default {
    namespaced: true,
    state: {
        savedPlaces: [],
        markers: []
    },

    getters: {
        places(state) {
            return state.savedPlaces;
        },

        getMarkers(state) {
            return state.markers;
        }
    },

    mutations: {
        addPlace(state, payload) {
            state.savedPlaces.push(payload.formatted_address);
            console.log(state.savedPlaces);

        },

        addMarker(state, payload) {
            state.markers.push(payload);
        },

        removePlace(state, payload) {
            state.savedPlaces.splice(payload, 1);
            state.markers.splice(payload, 1);
        }
    },

    actions: {
        addPlace(context, payload) {
            //context.commit('addPlace', payload);
            axios.post('http://0.0.0.0:4567/api/frontpage/location', payload.formatted_address)
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        context.commit('addPlace', payload);
                        this._vm.$toasted.show('Place added successfully to your saved places!', {
                            duration: 4500,
                            type: 'success',
                        });
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },

        addMarker(context, payload) {
            context.commit('addMarker', payload);
        },

        removePlace(context, payload) {
            context.commit('removePlace', payload);
        }
    }
};
