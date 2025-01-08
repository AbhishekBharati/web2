import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("User Connected");
  // setInterval(() => {
  //   socket.send(`Solana Price right now is : ${Math.random() * 100}`);
  // }, 500)

  socket.on("message", (event) => {
    if (event.toString() === "ping") {
      socket.send("pong");
    }
  })
})
