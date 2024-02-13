/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_list').del()
  await knex('movie_list').insert([
    {Title: 'Tomb Raider', ReleaseDate: '16 Mar 2018', Rated: 'PG-13', Genre: 'Action, Adventure, Fantasy', Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg', Rating: '6.3/10'},
    {Title: 'The Maze Runner', ReleaseDate: '19 Sep 2014', Rated: 'PG-13', Genre: 'Action, Mystery, Sci-Fi', Poster: 'https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg', Rating: '6.8/10'},
    {Title: 'The Great Gatsby', ReleaseDate: '10 May 2013', Rated: 'PG-13', Genre: 'Drama, Romance', Poster: 'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg', Rating: '7.2/10'},
    {Title: 'Captain Marvel', ReleaseDate: '08 Mar 2019', Rated: 'PG-13', Genre: 'Action, Adventure, Sci-Fi', Poster: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg', Rating: '6.8/10'},
    {Title: 'Pacific Rim', ReleaseDate: '12 Jul 2013', Rated: 'PG-13', Genre: 'Action, Adventure, Sci-Fi', Poster: 'https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg', Rating: '6.9/10'},
  ]);
};
