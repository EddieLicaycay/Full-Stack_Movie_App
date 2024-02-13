const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).send({
    message: 'Your Server is Up and Running! Use the directory /movies to view the list of movies.'
  })
});

app.get('/movies', (request, response) => {
  knex('movie_list')
    .select('*')
    .then(data => response.status(200).json(data))
    .catch(err => {
      console.error('Error retrieving movies:', err);
      response.status(500).json({
        message: 'Internal Server Error'
      });
    });
});

app.listen(PORT, () =>
  console.log(`Your server is up and running in port:${PORT}`)
);