"use strict";

var WebSocket = require('ws');

var PORT = 5000;
var wsServer = new WebSocket.Server({
  port: PORT
});
wsServer.on('connection', function (socket) {
  //Some Feedback on the Console
  console.log('A client just Connected'); //Attach some behavior to the incoming Socket

  socket.on('message', function (msg) {
    console.log("Received message from client ".concat(msg)); //socket.send(`Take this back ${msg}`)
    //Broadcast that message to all connected clients

    wsServer.clients.forEach(function (client) {
      client.send("Someone said: ".concat(msg));
    });
  });
  socket.on('close', function () {
    console.log("Client Disconnected!");
  });
});
var dateNow = new Date();
console.log("".concat(dateNow, " Server is Listening on port ").concat(PORT));