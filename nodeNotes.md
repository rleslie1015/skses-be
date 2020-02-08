### nothing to see here just some notes for meself :) 

##    Node JS


To write a simple web server with Node.js 
1. Use Node `HTTP` module to abstract away complex network related operations
2. Write the single *request handler* function that will handle all the requests to the server

```
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

```
Node js is `runtime envirment` or platform that runs JS applications outside of the browser
- Awesome because its Async lets you take advantage of one processor
- Awesome because you have access to the NPM repository 


## Enter Express JS  
 - Express is a light framework that lets you build web apps and is compatible with connect middleware

- Main Features -> Routing, Middleware, Helpers (response.redirect(), response.status(), response.send(), and request.ip.), Views

See server.js for server code.  
- Must generate a package.json and install expess with yarn or node `npm init -y`

## Common JS Module system
- import a module using: `require();`
- export a module using : `module.export();`

## Middleware 
```
// logger
function logger(req, res, next) {
    console.log(
        `[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get(
            'Origin'
        )}`
    );
    next();
};

server.use(logger); //logger is applied globaly
```
## Web Deployment and Best Practices 

Environment: the computer the program is running on. for example the dev runs the API on there local computer or developmetn environment.

Applications also have servers where the applications is deployed so that users can interact with it: or the production environment.

Also: Testing and Staging
