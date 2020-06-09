import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    updateMovies(state, value) {
      state.movies.push(...value);
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
});

export default store;
