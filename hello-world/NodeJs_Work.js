const fs = require("fs");

const os = require("os")
console.log(os.cpus().length)

// Blocking (Synchronous)
// console.log("1")
const result = fs.readFileSync("./test.txt", "utf8")
// console.log(result)
// console.log("2")


// non Blocking (Asynchronous)
console.log("1")
fs.readFileSync("./test.txt", "utf8", (err, result) => {

//   console.log(result);
});
console.log("2")


// default thread pool size = 4
// Max? - 8core cpu - 8


Node.js is particularly well-suited for:

I/O-bound applications - File operations, database queries, network requests
Real-time applications - Chat apps, live notifications, collaboration tools
APIs - RESTful services, GraphQL APIs
Microservices - Small, independent services
