const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  guid: {
    type: String
  },
  pubDate: {
    type: String
  }
});

const Feeds = mongoose.model("Feeds", feedSchema);

module.exports = {
  Feeds
};
