const express = require("express");

const User = require("../users/model");

const server = express();
server.use(express.json());
// server.use(helmet());

server.get("/", (req, res) => {
  console.log("sanity check");
  res.json({ MESSAGE: process.env.MESSAGE });
});

server.get("/api/users", (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

server.post("./api/register"),
  (req, res) => {
    let user = req.body;
    if (!user.username || !user.password) {
      res
        .status(404)
        .json({ message: "please provide user name and password" });
    } else {
      User.addUser(user).then((addedUser) => {
        res.status(200).json(addedUser);
      });
    }
  };

server.post("/api/login", (req, res) => {
  const user = req.body;
  if (!user.username || !user.password) {
    res.status(400).json({
      message: "Please provide username and password for the user",
    });
  } else {
    res.json({
      message: "Welcome!",
    });
  }
});

module.exports = server;
