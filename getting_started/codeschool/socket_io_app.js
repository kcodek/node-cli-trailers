var express = require('express')
var app = express()
var server = require('http').createServer(app)

var io = require('socket.io')(server)

io.on('connection', function(client){
    console.log('ClientConnected...')

    //emit the messages to the client
    client.emit('messages',{hello:'world'})

})

io.on('connection', function(client) {
    client.on('messages', function (data) {
       console.log(data); //listen for messages event
    });
});

app.get('/',function(req,res)
{
// console.log(__dirname + './index.html')    
res.sendFile(__dirname + './index.html')
})

server.listen(8080)