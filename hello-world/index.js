const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("I am a Anup Patwa");
                break;
            default:
                res.end("404 - Page Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server is listening"));




// Understanding the Code

//1 http.createServer() - Creates a new HTTP server instance
//2 The callback function is executed for each request with two parameters:
//3 req - The request object (http.IncomingMessage)
//4 res - The response object (http.ServerResponse)
//5 res.writeHead() - Sets the response status code and headers
//6 res.end() - Sends the response and ends the connection
//7 server.listen() - Starts the server on the specified port










