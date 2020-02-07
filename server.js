// Server.js has the configuration of the server
const express = require('express');  // import the express package
const helmet = require('helmet');
const cors = require('cors');
const server = express();   // creates the server
const userRouter = require('./api/user/userRouter');
const visRouter = require('./api/visions/visionRouter');

// middleware
server.use(express.json());  // all endpoint on our server will affected by .use()
server.use(helmet());
server.use(cors());


// requests to routes that begin with /users or /visions 
server.use('/api/users', userRouter); // the traffic gets sent to userRouter
server.use('/api/visions', visRouter); // this traffic gets sent to visRouter

// The request handler 
// When using Node.js to build a server, we use a simgle request handler function for all request
server.get('/', (req, res) => {  // handle requests to the root of the API the / route
    // res.send("hello from express");
    res.status(200).json({ message: 'API IS RUNNING!'})
})


module.exports = server