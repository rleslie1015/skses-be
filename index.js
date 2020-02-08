require('dotenv').config();

// This file is solely responsible for starting the server
const port = process.env.PORT || 3001; // Node gives us process (where the application is running) gives us env object that we can use to read the port from the enc
// imports the server
const server = require('./server.js');
// starts the server
server.listen(port,() => {
    console.log(`\n Listening on ${port} \n`);
});