//Import the HTTP module
const http=require('http');

//Create a server
const server = http.createServer((req,res) =>
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Welcome to Student Information System</h1>");
    res.write("<p>Student Name: Bella </p>");
    res.write("<p>Course: BCA </p>");
    res.write("<p>Year: 2nd Year</p>");
    res.end();
});

//Start Server on port 3000
server.listen(3000, () => 
{
    console.log('Server running at http://localhost:3000/');
});