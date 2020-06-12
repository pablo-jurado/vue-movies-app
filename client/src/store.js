import Vue from "vue";
import Vuex from "vuex";

import { apolloClient } from "./vue-apollo";
import gql from "graphql-tag";

import {
  UPDATE_SEARCH_VALUE,
  RESET_STATE,
  FETCH_MOVIES,
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
      const { searchValue, pageNumber } = context.state;
      const response = await apolloClient.query({
        query: gql`
          query searchMovies($value: String!, $page: Int) {
            searchMovies(value: $value, page: $page) {
              imdbID
              Title
              Year
              Poster
            }
          }
        `,
        variables: {
          value: searchValue,
          page: pageNumber,
        },
      });

      if (response && response.data && response.data.searchMovies) {
        const movies = response.data.searchMovies;
        context.commit(FETCH_MOVIES, movies);
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
