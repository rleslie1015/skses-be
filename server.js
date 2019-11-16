const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const userRouter = require('./api/user/userRouter');
const visRouter = require('./api/visions/visionRouter');


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/users', userRouter);
server.use('/visions', visRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API IS RUNNING!'})
})


module.exports = server