<template>
  <div>
    <h1 class="text-xl font-bold">Movies saved: {{ $store.state.favorites.length }}</h1>
    <div
      class="m-8 inline-block my-4 border border-gray-200 rounded shadow"
      v-for="(movie) of $store.state.favorites"
      :key="movie.id"
    >
      <p class="p-4">{{movie.title}}</p>
      <img :src="movie.poster" :alt="`poster of ${movie.title}`" />
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 400px;
}
</style>
