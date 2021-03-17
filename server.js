const express = require("express");
const mongoose = require("mongoose");
const htmlRouter = require("./routes/html-routes.js")
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://<sluwenxi@gmail.com>:<songluwenxi87112756>@cluster0.5k55w.mongodb.net/<dbworkout>?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});


htmlRouter(app)
app.use(require('./routes/api-routes.js'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
