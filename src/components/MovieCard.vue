<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{year}}</p>
    <img :src="src" v-bind:alt="`${title} movie poster`" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    year: String,
    src: String
  }
};
</script>