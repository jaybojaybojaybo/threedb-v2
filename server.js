const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello Node JS Server Response');
  response.end( );
});

server.listen(7000, '127.0.0.1');
console.log('Node server running on port 7000');