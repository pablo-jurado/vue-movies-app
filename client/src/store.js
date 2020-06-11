import Vue from "vue";
import Vuex from "vuex";

import { searchMovies } from "@/utils";

import {
  UPDATE_SEARCH_VALUE,
  FETCH_MOVIES,
  RESET_STATE,
  UPDATE_PAGE_NUMBER,
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
} from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchValue: "",
    movies: [],
    pageNumber: 1,
    favorites: [],
  },
  mutations: {
    updateSearchValue(state, value) {
      state.searchValue = value;
    },
    fetchMovies(state, moviesArray) {
      state.movies = [...state.movies, ...moviesArray];
    },
    addToFavorites(state, movie) {
      const alreadyInFavorites = state.favorites.find((m) => m.id === movie.id);
      if (!alreadyInFavorites) state.favorites.push(movie);
    },
    deleteFromFavorites(state, movieId) {
      const filteredMovies = state.favorites.filter((m) => m.id !== movieId);
      state.favorites = filteredMovies;
    },
    updatePageNumber(state) {
      state.pageNumber++;
    },
    resetState(state) {
      state.searchValue = "";
      state.movies = [];
      state.pageNumber = 1;
    },
  },
  actions: {
    updateSearchValue(context, value) {
      context.commit(UPDATE_SEARCH_VALUE, value);
    },
    async fetchMovies(context) {
      const data = await searchMovies(
        context.state.searchValue,
        context.state.pageNumber
      );
      if (data.Response === "True") {
        context.commit(FETCH_MOVIES, data.Search);
      }
    },
    addToFavorites(context, movie) {
      context.commit(ADD_TO_FAVORITES, movie);
    },
    deleteFromFavorites(context, movieId) {
      context.commit(DELETE_FROM_FAVORITES, movieId);
    },
    updatePageNumber(context) {
      context.commit(UPDATE_PAGE_NUMBER);
    },
    resetState(context) {
      context.commit(RESET_STATE);
    },
  },
});

store.subscribe((mutation, state) => {
  console.log(mutation.type);
  console.log(state);
});

export default store;
