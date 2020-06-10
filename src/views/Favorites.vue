<template>
  <div>
    <h1 class="text-xl font-bold">Movies saved: {{ $store.state.favorites.length }}</h1>
    <div
      class="wrapper m-8 inline-block my-4 border border-gray-200 rounded shadow"
      v-for="(movie) of $store.state.favorites"
      :key="movie.id"
    >
      <button
        class="bg-red-400 hover:bg-red-500 text-white font-bold rounded-full px-2 py-0 m-2 float-right"
      >x</button>
      <p class="p-4">{{movie.title}}</p>
      <img :src="movie.poster" :alt="`poster of ${movie.title}`" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 250px;
  max-height: 450px;
  overflow: hidden;
}
img {
  max-height: 400px;
}
</style>
