// create the server in index.js
const http = require('http');
const router = require('./router');
const port = 3001;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  router(req, res);
});

server.listen(port, hostname, ()=> {
  console.log(`Server running at http://${hostname}:${port}/`);
});
