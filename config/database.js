const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/RSS-Feeds-ejs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("EJS Database Connected....:)"))
  .catch((err) => console.log(err));

module.exports = {
  mongoose
};
