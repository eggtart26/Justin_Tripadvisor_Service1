const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/tour/:id', (req, res) => {
  // This route will look up a tour by ID and send the relevant data.
  res.writeHead(200);
  res.end();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = app;
