const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/books/author/', (req, res) => {
  const author = req.body;

  // Do something with the author data, such as adding it to a database or using it for some other purpose.
  console.log(author);

  // For this example, we'll simply send a response back to the client with a 200 status code.
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});
