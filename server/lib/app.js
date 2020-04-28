const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 8080;
const startConnection = require("./index");

app.use(express.static(path.join(__dirname, "../../build")));

console.log(
  "Production build located at:",
  path.join(__dirname, "../../build")
);

app.get("/", (req, res, next) => res.sendFile(__dirname + "./index.html"));

// sockets test
io.on("connection", socket => {
  console.log("client connected", socket.id);

  socket.on("START_GAME", data => {
    startConnection(data.streamerOneUsername, data.streamerTwoUsername, socket);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected", socket.id);
  });
});

server.listen(port, () => {
  console.log("server listening on port", port);
});
