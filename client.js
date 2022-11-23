const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // returns the server message when it sends one to the client
  conn.on("data", (data) => {
    console.log(data)
  });

  // performs an action when the client connects to the server
  conn.on("connect", () => {
    console.log("Connected to server!")
    conn.write("Name: WND");
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;