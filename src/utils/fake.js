const fakeData = {
  Response: "True",
  Search: [
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Back to the Future Part II",
      Year: "1989",
      imdbID: "tt0096874",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTMxMGM5MjItNDJhNy00MWI2LWJlZWMtOWFhMjI5ZTQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Back to the Future",
      Year: "1985",
      imdbID: "tt0088763",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Back to the Future Part III",
      Year: "1990",
      imdbID: "tt0099088",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjhlMGYxNmMtOWFmMi00Y2M2LWE5NWYtZTdlMDRlMGEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Jay and Silent Bob Strike Back",
      Year: "2001",
      imdbID: "tt0261392",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2EyYWEwZmQtZWU0Yy00M2Y3LThiZTktOTQxZDUxY2ZjOTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Way Way Back",
      Year: "2013",
      imdbID: "tt1727388",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTU5ODk5NDg0Nl5BMl5BanBnXkFtZTcwNzQwMjI1OQ@@._V1_SX300.jpg",
    },
    {
      Title: "Jack Reacher: Never Go Back",
      Year: "2016",
      imdbID: "tt3393786",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODQ3ODQ3NDI4NV5BMl5BanBnXkFtZTgwMDY1Mzk5OTE@._V1_SX300.jpg",
    },
    {
      Title: "Jay and Silent Bob Strike Back",
      Year: "2001",
      imdbID: "tt0261392",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2EyYWEwZmQtZWU0Yy00M2Y3LThiZTktOTQxZDUxY2ZjOTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Way Way Back",
      Year: "2013",
      imdbID: "tt1727388",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkzNDg3MTIyMF5BMl5BanBnXkFtZTcwOTAwNDc1MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Jack Reacher: Never Go Back",
      Year: "2016",
      imdbID: "tt3393786",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjAzODM4NTc1OF5BMl5BanBnXkFtZTcwNDU2ODUzMw@@._V1_SX300.jpg",
    },
  ],
};

export function fakeSearchMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, 1000);
  });
}
