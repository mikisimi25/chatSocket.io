let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io');

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
});

server.listen(3000);