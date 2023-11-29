const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, and this was a success, my project is available for the whole world.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));