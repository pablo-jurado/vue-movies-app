<template>
  <div v-show="movies.length !== 0">
    <div class="flex flex-wrap">
      <MovieCard
        v-for="item in movies"
        :key="item.imdbID"
        :id="item.imdbID"
        :title="item.Title"
        :year="item.Year"
        :src="item.Poster"
      />
    </div>
    <div id="scroll-track" ref="scroll">Scroll</div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import { UPDATE_PAGE_NUMBER, FETCH_MOVIES } from "@/actions";

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      observer: null
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };

    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.$store.dispatch(UPDATE_PAGE_NUMBER);
          this.$store.dispatch(FETCH_MOVIES);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.scroll);
    this.observer = observer;
  },
  props: {
    movies: Array
  }
};
</script>
