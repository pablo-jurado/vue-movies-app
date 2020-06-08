<template>
  <div class="movies-container">
    <MovieCard
      v-for="item in movies"
      v-bind:key="item.imdbID"
      :title="item.Title"
      :year="item.Year"
      :src="item.Poster"
    />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  components: {
    MovieCard
  },
  props: {
    movies: Array
  }
};
</script>
<style scoped>
.movies-container {
  display: flex;
  flex-wrap: wrap;
}
</style>