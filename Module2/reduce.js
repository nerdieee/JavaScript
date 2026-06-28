let movies = [
  { id: 1, title: "3 Idiots",     genre: "Comedy",    year: 2009, rating: 8.4, watched: true  },
  { id: 2, title: "Dangal",       genre: "Drama",     year: 2016, rating: 8.4, watched: false },
  { id: 3, title: "KGF Chapter 2",genre: "Action",    year: 2022, rating: 8.2, watched: true  },
  { id: 4, title: "Drishyam",     genre: "Thriller",  year: 2013, rating: 8.2, watched: false },
  { id: 5, title: "Taare Zameen Par", genre: "Drama", year: 2007, rating: 8.5, watched: false },
  { id: 6, title: "PK",           genre: "Comedy",    year: 2014, rating: 8.1, watched: true  }
];

/* using Reduce Method of Array and Object*/

let moviecount = movies.reduce( (count,movie) =>{
  count[movie.genre] =((count[movie.genre] || 0) +1);
 return count; } ,{});
console.log("Movie genre :" , moviecount );
