import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    pageNumber: 0,
  },
  mutations: {
    updateMovies(state, value) {
      state.movies.push(...value);
    },
    updatePageNumber(state) {
      console.log(state);
      state.pageNumber++;
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
});

export default store;
