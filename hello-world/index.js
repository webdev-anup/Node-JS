const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/.favicon.ico") {
    res.end();
    return;
  }

  const log = `${Date.now()}: New Req Received\n`;

  // Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
  // URL Parsing and Formatting
  href: The full URL that was parsed
  // protocol: The protocol scheme (e.g., 'http:')
  // host: The full host portion (e.g., 'example.com:8080')
  // hostname: The hostname portion (e.g., 'example.com')
  // port: The port number if specified
  // pathname: The path section of the URL
  // search: The query string including the leading ?
  // query: Either the query string without the ?, or a parsed query object


  

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.myName;
        res.end(`hi, ${username}!`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`You searched for: ${search}`);
        break;
      default:
        res.end("404 - Page Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server is listening"));
