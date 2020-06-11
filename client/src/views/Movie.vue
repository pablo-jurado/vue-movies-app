<template>
  <div>
    <div class="flex">
      <router-link
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow m-4"
        to="/"
      >Back</router-link>
    </div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-if="!$apollo.loading && !movieById">Something whent wrong...</div>
    <div v-if="movieById">
      <h1 class="text-2xl font-bold m-4">{{ movieById.Title }}</h1>
      <div class="flex w-7/12 m-auto">
        <img class="rounded shadow-md" :src="movieById.Poster" alt />
        <div class="ml-4 text-left">
          <p class="my-2">
            <strong>Year:</strong>
            {{movieById.Year}}
          </p>
          <p class="my-2">
            <strong>Genre:</strong>
            {{movieById.Genre}}
          </p>
          <p class="my-2">
            <strong>Director:</strong>
            {{movieById.Director}}
          </p>
          <p class="my-2">
            <strong>Actors:</strong>
            {{ movieById.Actors }}
          </p>
          <p class="my-2">
            <strong>Country:</strong>
            {{ movieById.Country }}
          </p>
          <p class="my-2">
            <strong>Language:</strong>
            {{ movieById.Language }}
          </p>
          <p class="my-2">
            <strong>Awards:</strong>
            {{ movieById.Awards }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qgl from "graphql-tag";

export default {
  name: "Movie",
  data() {
    return {
      movieById: ""
    };
  },
  create() {
    console.log("created!!!");
    console.log(this);
  },
  apollo: {
    movieById() {
      return {
        query: qgl`query movieById($id: ID!) {
          movieById(id: $id) {
            Title
            Poster
            Year
            Genre
            Director
            Actors
            Country
            Language
            Awards
          }
        }`,
        variables: {
          id: this.$route.params.id
        }
      };
    }
  }
};
</script>