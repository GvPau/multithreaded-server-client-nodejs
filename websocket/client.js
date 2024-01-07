const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:3005");

ws.on("open", () => {
  console.log("Connected to the server");

  // Send a message to the server
  ws.send("Hello, WebSocket server!");
});

ws.on("message", (message) => {
  console.log(`Received message from server: ${message}`);
});

ws.on("close", () => {
  console.log("Connection closed");
});
