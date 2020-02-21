const { Feeds } = require("../models/Feeds");
const axios = require("axios");
let parseString = require("xml2js").parseString;

module.exports.landing = (req, res) => {
  axios
    .get("https://timesofindia.indiatimes.com/rssfeedstopstories.cms")
    .then((response) => {
      const xml = response.data;
      parseString(xml, function(err, result) {
        result.rss.channel[0].item.map((feed) => {
          let feedData = {
            title: feed.title[0],
            description: feed.description[0],
            link: feed.link[0],
            guid: feed.guid[0],
            pubDate: feed.pubDate[0]
          };

          Feeds.findOne({ title: feedData.title }, function(err, data) {
            if (err) {
              console.log(err);
            }
            if (data) {
              console.log("data exists");
            } else {
              const feeds = new Feeds(feedData);
              feeds
                .save()
                .then((data) => console.log("data", data))
                .catch((err) => console.log(err));
            }
          });
        });
      });
      //res.send(xml);
    })
    .catch((err) => console.log(err));
  res.render("home");
};

module.exports.list = (req, res) => {
  Feeds.find()
    .then(function(feeds) {
      let latestFeeds = feeds;
      res.render("feeds", { latestFeeds: latestFeeds });
      console.log("latest", latestFeeds);
    })
    .catch((err) => console.log(err));
};
