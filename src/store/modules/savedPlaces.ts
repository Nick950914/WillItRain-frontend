// import axios from "axios";

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
            context.commit('addPlace', payload);
        },

        addMarker(context, payload) {
            context.commit('addMarker', payload);
        },

        removePlace(context, payload) {
            context.commit('removePlace', payload);
        }
    }
};
