console.log('Welcome to the Online Warehouse');

const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Everyone, this is my clothing store\n');
});

const PORT = 3000;
server.listen(PORT,() => {
    console.log(`THIS WORKS.SERVER IS RUNNING ON http://localhost:${PORT}`);
});
