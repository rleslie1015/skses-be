// This file is solely responsible for starting the server
const port = process.env.PORT || 3001;
// imports the server
const server = require('./server.js');
// starts the server
server.listen(port,() => {
    console.log(`\n Listening on ${port} \n`);
});