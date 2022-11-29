const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Docker via GitHub Actions on Main with Live demo!');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
