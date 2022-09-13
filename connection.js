const mongoose = require("mongoose");


const url = `mongodb+srv://chatting:chatting@cluster0.buj5gg6.mongodb.net/test`;

mongoose
  .connect(url)
  .then((data) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
