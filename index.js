let express = require('express');
let app = express();
let server = require('http').createServer(app).listen(3000);
let io = require('socket.io')(server);

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
});

let users = [], connections = [];

io.sockets.on('connection', (socket) => {
    console.log("Success connection");
    connections.push(socket);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Success disconnection");
    });

    socket.on('send mess', (data) => {
        io.sockets.emit('add mess', {mess: data.mess, name: data.name, className: data.className});
    });
});
