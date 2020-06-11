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
    >Search</button>
    <!-- <p v-if="error">Results not found</p>
    <p v-if="loading">Loading...</p>-->
  </div>
</template>

<script>
import { UPDATE_SEARCH_VALUE, FETCH_MOVIES, RESET_STATE } from "@/actions";
export default {
  data: function() {
    return {
      searchValue: "",
      loading: false,
      error: false
    };
  },
  methods: {
    search: function() {
      this.$store.dispatch(RESET_STATE);
      this.$store.dispatch(UPDATE_SEARCH_VALUE, this.searchValue);
      this.$store.dispatch(FETCH_MOVIES);
    }
  }
};
</script>
