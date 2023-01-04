require('dotenv').config()
require("./config/mongoose.config")
const express = require('express')
const app = express();
const port = process.env.PORT
const cors = require('cors')
const { createServer } = require("http");
const { Server } = require("socket.io");
const router = require("./routes/router")
const httpServer = createServer(app);

const io = new Server(httpServer,  {
    cors: {
        origin: "http://localhost:3000"
    }});


app.use(express.json())  
app.use(express.urlencoded( {extended : false } ))
app.use(cors())
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
 );

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
    socket.on('new-confirmed', (socket) => {
        io.emit('confirmed-notification', JSON.stringify(socket))
    });
    socket.on('new-answer', (socket) => {
        io.emit('answer-notification', JSON.stringify(socket))
    });
    socket.on('new-liked', (socket) => {
        io.emit('like-notification', JSON.stringify(socket))
    });
});




httpServer.listen(port);

app.use(router)

module.exports = io 

