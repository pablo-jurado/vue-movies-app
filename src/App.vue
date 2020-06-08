<template>
  <div id="app">
    <Header v-on:searchDone="updateMovies" />
    <MovieList v-bind:movies="movies" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MovieList from "./components/MovieList.vue";

export default {
  name: "App",
  components: {
    Header,
    MovieList
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    updateMovies(movies) {
      this.movies = movies;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
