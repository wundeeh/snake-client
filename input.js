const connect = require("./client");
const {moveUp, moveLeft, moveDown, moveRight} = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

// if ctrl+c is pressed exits the game, if wasd is pressed console logs the movement it should do
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write(moveUp);
  } else if (key === "a") {
    connection.write(moveLeft);
  } else if (key === "s") {
    connection.write(moveDown);
  } else if (key === "d") {
    connection.write(moveRight);
  } else if (key === "p") {
    connection.write("Say: Hello everyone!")
  }
};

module.exports = setupInput;