import Vue from "vue";
import Vuex from "vuex";

import {
  UPDATE_MOVIES,
  RESET_MOVIES,
  UPDATE_PAGE_NUMBER,
  ADD_TO_FAVORITES,
} from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    pageNumber: 0,
    favorites: [],
  },
  mutations: {
    updateMovies(state, moviesArray) {
      state.movies.push(...moviesArray);
    },
    addToFavorites(state, movie) {
      const alreadyInFavorites = state.favorites.find((m) => m.id === movie.id);
      if (!alreadyInFavorites) state.favorites.push(movie);
    },
    updatePageNumber(state) {
      state.pageNumber++;
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    updateMovies(context, moviesArray) {
      context.commit(UPDATE_MOVIES, moviesArray);
    },
    addToFavorites(context, movie) {
      context.commit(ADD_TO_FAVORITES, movie);
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
