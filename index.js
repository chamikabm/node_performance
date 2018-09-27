const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there!l');
});

app.listen(3000);