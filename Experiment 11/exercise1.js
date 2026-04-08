const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Node.js Server Running</h1>');
    res.write('<p>Request handled successfully!</p>');
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});