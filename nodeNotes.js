/****************************************************************************************************
 * ***********************************      Node JS     ********************************************
 * ************************************************************************************************** */

const http = require('http'); //built in node.js module to handle http traffic

const hostname = '127.0.0.1'; // the local computer where the server is running

const port = 3000; // port we'll use to watch for traffic 

const server = http.createServer((req, res) => {
    //creates our server
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Hello World from Node\n');
});

server.listen(port, hostname, () => {
    // start watching for connections on the port spec$ified
    console.log(`Server running at http://${hostname}:${port}/`);
});


// Node js is runtime envirment or platform that runs JS applications outside of the browser
// Its awesome because its Async 
// its awesome because you have access to the NPM repository 


/****************************************************************************************************
 * ***********************************  Enter Express JS  ********************************************
 * ************************************************************************************************** */

 // Express is a light framework that lets you build web apps and is compatible with connect middleware

 // Main Features -> Routing, Middleware, Helpers (response.redirect(), response.status(), response.send(), and request.ip.), Views

// See server.js for server code 
// Must generate a package.json and install expess with yarn or node `npm init -y`
