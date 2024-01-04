const net = require("net");

const server = net.createServer((socket) => {
  console.log("New Client Connected");

  socket.write("Hello, welcome to my server");

  socket.on("data", (data) => {
    console.log(`Data received from client: ${data}`);
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

const PORT = 1000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
