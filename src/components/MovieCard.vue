<template>
  <div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg m-6">
    <img class="w-full" :src="src" v-bind:alt="`${title} movie poster`" />

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ year }}
      </p>
      <router-link :to="`/movie/${id}`">Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    year: String,
    src: String,
  },
};
</script>
