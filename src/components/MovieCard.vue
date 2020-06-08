<template>
<<<<<<< HEAD
  <div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg m-6">
    <img class="w-full" :src="src" v-bind:alt="`${title} movie poster`" />

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ year }}
      </p>
    </div>
=======
  <div class="movie-card">
    <div class="desciption">
      <h3>{{ title }}</h3>
      <p>{{ year }}</p>
    </div>
    <img :src="src" v-bind:alt="`${title} movie poster`" />
>>>>>>> 7b4c839... update move card styles
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    year: String,
    src: String,
  },
};
</script>
<<<<<<< HEAD
=======

<style>
.movie-card {
  border: solid 1px #dcdcdc;
  border-radius: 5px;
  display: inline-block;
  margin: 1rem;
  height: 450px;
  width: 15vw;
  min-width: 250px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  text-align: left;
}
.desciption {
  padding: 1rem;
}
</style>
>>>>>>> 7b4c839... update move card styles
