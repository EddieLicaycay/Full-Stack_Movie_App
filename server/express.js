const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

app.get('/', (request, response) => {
  response.status(200).send({
    message: 'Your Server is Up and Running!'
  })
})

app.listen(PORT, () =>
  console.log(`Your server is up and running in port:${PORT}`)
)