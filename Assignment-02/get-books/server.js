// Load required modules
const http = require('http');
const fs = require('fs');

// Define the server and its request handling logic
const server = http.createServer((req, res) => {
  if (req.method === 'PUT' && req.url === '/books/author/') {
    // Parse the request body as JSON
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      // Save the received data to a file
      const data = JSON.parse(body);
      const filename = `books-by-author-${data.author}.json`;
      fs.writeFile(filename, JSON.stringify(data.books, null, 2), err => {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('An error occurred while saving the data.');
        } else {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end(`Data received and saved to ${filename}.`);
        }
      });
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Endpoint not found.');
  }
});

// Run the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});