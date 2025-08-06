const  http = require('http');

const server = http.createServer((req,res)=>
{
  res.writeHead(200, {'content-type': 'text/html'});
   
  const now = new Date();

  res.write("<h1>Wecome to Node.js Server</h1>");
  res.write("<p>Current Date and Time:" + now + "</p>");
  res.end();
});

server.listen(3000,() =>
{
    console.log("Server running at http://localhost:3000/");
});