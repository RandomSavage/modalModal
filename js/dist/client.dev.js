"use strict";

var WebSocket = require('ws');

var serverAddress = "ws://127.0.0.1:5000";
var ws = new WebSocket(serverAddress);
ws.on('open', function () {
  ws.send("Hello Server!");
});
ws.on('message', function (msg) {
  console.log("Received Message from the Server: ".concat(msg));
});