const WebSocket = require("ws");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket server is running");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");

  // Handle messages from the client
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);

    // Send a response back to the client
    ws.send(`You sent: ${message}`);
  });

  // Handle the WebSocket connection closing
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(3005, () => {
  console.log("WebSocket server is listening on port 3005");
});
