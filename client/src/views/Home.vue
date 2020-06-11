<template>
  <div class="home">
    <Header />
    <MovieList v-bind:movies="$store.state.movies" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MovieList from "@/components/MovieList.vue";
import store from "@/store";
export default {
  name: "Home",
  store,
  components: {
    Header,
    MovieList,
  },
};
</script>
