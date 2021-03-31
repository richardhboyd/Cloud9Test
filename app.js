require("url");
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
  const { method, url, headers } = request;
  let urlParts = new URL(url, `http://${headers.host}`);
  const bookId = urlParts.searchParams.get("bookid");
  
  if (method === "GET") {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    response.write(`<html><body><h1>You request Book "${bookId}"!</h1></body></html>`);
    response.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});