const http=require('http');
const fs= require('fs');

const server =  http.createServer((req,res) =>
{
    fs.readFile('message.txt','utf8',(ree,data)=>
    {
    if(err)
{
  res.writeHead(500, {'content-type': 'text/plain'});
  res.end('Error reading the file');
}
else
{
    res.writeHead(200, {'Content-Typpe': 'text/plain'});
    res.end(data);
}
});
}); 

server.listen(5000,() =>
{
    console.log("Server running at http://localhost:5000/");
});