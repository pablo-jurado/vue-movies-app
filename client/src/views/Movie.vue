<template>
  <div>
    <div class="flex">
      <router-link
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow m-4"
        to="/"
      >Back</router-link>
    </div>
    <div v-if="error">Something whent wrong...</div>
    <div v-if="movie">
      <h1 class="text-2xl font-bold m-4">{{ movie.Title }}</h1>
      <div class="flex w-7/12 m-auto">
        <img class="rounded shadow-md" :src="movie.Poster" alt />
        <div class="ml-4 text-left">
          <p class="my-2">
            <strong>Year:</strong>
            {{movie.Year}}
          </p>
          <p class="my-2">
            <strong>Genre:</strong>
            {{movie.Genre}}
          </p>
          <p class="my-2">
            <strong>Director:</strong>
            {{movie.Director}}
          </p>
          <p class="my-2">
            <strong>Actors:</strong>
            {{ movie.Actors }}
          </p>
          <p class="my-2">
            <strong>Country:</strong>
            {{ movie.Country }}
          </p>
          <p class="my-2">
            <strong>Language:</strong>
            {{ movie.Language }}
          </p>
          <p class="my-2">
            <strong>Awards:</strong>
            {{ movie.Awards }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovieById } from "../utils";

export default {
  name: "Movie",

  data() {
    return {
      movie: null,
      error: false
    };
  },

  async created() {
    const id = this.$route.params.id;
    const movieData = await getMovieById(id);
    if (movieData.Response === "True") {
      this.movie = movieData;
    } else {
      this.error = true;
    }
  }
};
</script>