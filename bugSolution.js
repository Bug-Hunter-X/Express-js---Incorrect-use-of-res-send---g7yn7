const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Correct usage: uses res.json() to send JSON objects
  res.json({ message: 'Hello from Express!' });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});