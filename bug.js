const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Incorrect usage of res.send. It should only send a string or buffer. Sending an object directly results in an error.
  res.send({ message: 'Hello from Express!' });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});