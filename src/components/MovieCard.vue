<template>
  <div
    class="flex flex-col mx-auto max-w-sm rounded overflow-hidden shadow-lg m-6 justify-between"
  >
    <img class="w-full" :src="src" v-bind:alt="`${title} movie poster`" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base m-4">
        {{ year }}
      </p>
      <router-link
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-2 border border-gray-400 rounded-full shadow"
        :to="`/movie/${id}`"
        >See Details</router-link
      >
      <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-2 border border-gray-400 rounded-full shadow"
      >
        Add to Favorites
      </button>
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
