const net = require("net");

const client = new net.Socket();

client.connect(1000, "127.0.0.1", () => {
  console.log("Connected to server");

  client.write("Hello, I am the client");

  client.on("data", (data) => {
    console.log(`Data received from server: ${data}`);
  });

  client.on("end", () => {
    console.log("Disconnected from server");
  });
});

// Handle user input to send messages to the server
process.stdin.on("data", (data) => {
  client.write(data.toString());
});

// Handle user input to close the client
process.stdin.on("end", () => {
  client.end();
});
