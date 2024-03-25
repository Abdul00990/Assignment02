const express = require('express');
const app = express();
const port = 3000;

let books = [
  { id: 1, name: 'Engineering Mathematics' },
  { id: 2, name: 'Artificial Intelligence' },
  { id: 3, name: 'Management Information Systems' }
];

app.get('/books', (req, res) => {
  res.send(books);
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);

  books = books.filter((book) => book.id !== id);

  res.send(`Book with id ${id} has been deleted`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});