<template>
  <div>
    <h1 class="text-3xl">Let's search for movies!</h1>
    <input
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4"
      v-model="searchValue"
    />
    <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      v-on:click="search"
    >
      Search
    </button>
    <p v-if="error">Results not found</p>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
// import { searchMovies } from "@/utils";
import { fakeSearchMovies as searchMovies } from "@/utils";

export default {
  data: function() {
    return {
      searchValue: "",
      loading: false,
      error: false,
    };
  },
  methods: {
    search: async function() {
      this.error = false;
      this.loading = true;

      const data = await searchMovies(this.searchValue);
      this.loading = false;

      if (data.Response === "True") {
        const moviesArray = data.Search;
        this.$emit("searchDone", moviesArray);
      } else {
        this.error = true;
      }
      this.searchValue = "";
    },
  },
};
</script>
