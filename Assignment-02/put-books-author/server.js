const http = require('http');

const port = process.env.PORT || 3000; // Use environment variable or default to 3000

const server = http.createServer((req, res) => {
  if (req.method === 'PUT' && req.url === '/books/author/') {
    let authorData = '';

    req.on('data', chunk => {
      authorData += chunk;
    });

    req.on('end', () => {
      try {
        const newAuthor = JSON.parse(authorData);
        console.log(`Author updated to: ${newAuthor}`);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Author updated successfully!');
      } catch (error) {
        console.error('Error parsing author data:', error);
        res.statusCode = 400; // Bad Request
        res.end('Invalid author data format (JSON expected)');
      }
    });
  } else {
    res.statusCode = 404; // Not Found
    res.end('Resource not found');
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
