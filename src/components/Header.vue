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
const fakeData = {
  Search: [
    {
      Title: "Back to the Future",
      Year: "1985",
      imdbID: "tt0088763",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OG…WIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "X-Men: Days of Future Past",
      Year: "2014",
      imdbID: "tt1877832",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2…jE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Back to the Future Part II",
      Year: "1989",
      imdbID: "tt0096874",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTMxMGM5Mj…TQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Back to the Future Part III",
      Year: "1990",
      imdbID: "tt0099088",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjhlMGYxNm…GEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Future Man",
      Year: "2017–2020",
      imdbID: "tt4975856",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWQ5MjE3Nj…TZkNjBjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Ivan Vasilievich: Back to the Future",
      Year: "1973",
      imdbID: "tt0070233",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGM1MjZmZG…GEwODM1XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      Title: "Future Diary",
      Year: "2011–2013",
      imdbID: "tt2069441",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjExOWYzMT…2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
    },
    {
      Title: "The Future",
      Year: "2011",
      imdbID: "tt1235170",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5ODQxNTI2M15BMl5BanBnXkFtZTcwMTk3OTQyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Phil of the Future",
      Year: "2004–2006",
      imdbID: "tt0340281",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmE1ZGI1YW…DMyODNlXkEyXkFqcGdeQXVyOTM1Njc1ODM@._V1_SX300.jpg",
    },
    {
      Title: "The Man from the Future",
      Year: "2011",
      imdbID: "tt2027178",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzFmZDc3OD…DIzOWY3XkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_SX300.jpg",
    },
  ],
  totalResults: "1196",
  Response: "True",
};

function getMovies() {
  // const api = "http://www.omdbapi.com/?apikey=xxxxxxxx&s="
  // return fetch(api + this.searchValue)
  //   .then(response => response.json())
  //   .then(console.log)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, 1000);
  });
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

      getMovies().then((data) => {
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
