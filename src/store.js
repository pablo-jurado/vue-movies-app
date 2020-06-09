import Vue from "vue";
import Vuex from "vuex";

import { UPDATE_MOVIES, RESET_MOVIES, UPDATE_PAGE_NUMBER } from "./actions";

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
      state.pageNumber++;
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    updateMovies(context, value) {
      context.commit(UPDATE_MOVIES, value);
    },
    updatePageNumber(context) {
      context.commit(UPDATE_PAGE_NUMBER);
    },
    resetMovies(context) {
      context.commit(RESET_MOVIES);
    },
  },
});

store.subscribe((mutation, state) => {
  console.log(mutation.type);
  console.log(state);
});

export default store;
