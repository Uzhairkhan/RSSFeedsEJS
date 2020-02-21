const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3051;
const mongoose = require("./config/database");
const feedsController = require("./app/controller/feedsController");

app.use(express.json());

app.use(cors());

app.set("view engine", "ejs");

app.get("/", feedsController.landing);

app.get("/RSS/feeds", feedsController.list);

app.listen(PORT, () => console.log(`Server started at port ${PORT} `));
