<template>
  <div>
    <h1>Let's search for movies!</h1>
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
function getMovies(value) {
  const key = process.env.VUE_APP_API_KEY;
  const api = `http://www.omdbapi.com/?apikey=${key}&s=${value}`;
  return fetch(api)
    .then((response) => response.json())
    .then((data) => data);
}

export default {
  data: function() {
    return {
      searchValue: "",
      loading: false,
      error: false,
    };
  },
  methods: {
    resetData: function() {
      this.loading = false;
      this.error = false;
    },
    search: function() {
      this.resetData();
      this.loading = true;

      getMovies(this.searchValue).then((data) => {
        this.loading = false;
        if (data.Response === "True") {
          this.$emit("searchDone", data.Search);
        } else {
          this.error = true;
        }
      });
      this.searchValue = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
img {
  height: 1.1rem;
}
</style>
