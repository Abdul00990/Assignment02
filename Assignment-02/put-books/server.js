const http = require('http');

const port = 8080;

const requestHandler = (request, response) => {
  if (request.method === 'PUT' && request.url === '/books') {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    request.on('end', () => {
      const book = JSON.parse(body);
      console.log(`Received book data: ${JSON.stringify(book)}`);
      response.end(`Received book data: ${JSON.stringify(book)}`);
    });
  } else {
    response.end(`Invalid request. Expected PUT method on /books endpoint.`);
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.error('Something went wrong', err);
  }
  console.log(`Server is listening on port ${port}!`);
});