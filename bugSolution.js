const http = require('http');

const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // Process the data
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'success' }));
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.statusCode = 400;
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});