<template>
  <div class="home">
    <Header v-on:searchDone="updateMovies" />
    <MovieList v-bind:movies="movies" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MovieList from "@/components/MovieList.vue";

export default {
  name: "Home",
  components: {
    Header,
    MovieList,
  },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    updateMovies(movies) {
      this.movies = movies;
    },
  },
};
</script>
