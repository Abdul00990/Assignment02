const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/books/author/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ name: 'Abdulmuheez', age: 20 }));
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
