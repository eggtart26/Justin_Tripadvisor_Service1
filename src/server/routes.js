const express = require('express');
const path = require('path');
const ctlr = require('./database/controller');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/tour/:id', (req, res) => {
  // This route will look up a tour by ID and send the relevant data.

  const { params: { id } } = req;
  // this is const id = req.params.id but it's defined using destructuring
  // https://exploringjs.com/impatient-js/ch_destructuring.html#object-destructuring

  ctlr.getTour(id);
  res.writeHead(200);
  res.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = app;
