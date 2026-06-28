let movies = [
  { id: 1, title: "3 Idiots",     genre: "Comedy",    year: 2009, rating: 8.4, watched: true  },
  { id: 2, title: "Dangal",       genre: "Drama",     year: 2016, rating: 8.4, watched: false },
  { id: 3, title: "KGF Chapter 2",genre: "Action",    year: 2022, rating: 8.2, watched: true  },
  { id: 4, title: "Drishyam",     genre: "Thriller",  year: 2013, rating: 8.2, watched: false },
  { id: 5, title: "Taare Zameen Par", genre: "Drama", year: 2007, rating: 8.5, watched: false },
  { id: 6, title: "PK",           genre: "Comedy",    year: 2014, rating: 8.1, watched: true  }
];

/* Now i have to show the list of unwatched movies, sorted by rating, showing only title and rating.*/
let moviesSet_1 = movies.filter(function(movies)  {return movies.watched=== false;
})
moviesSet_1.sort(function(a,b){ return a.rating-b.rating})
let Watch_movies = moviesSet_1.map(function(moviesSet_1){
    return console.log(`Movie Name -> ${moviesSet_1.title} and rating is ${moviesSet_1.rating}`)
})
            
