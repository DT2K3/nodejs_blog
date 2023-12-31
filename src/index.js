const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const path = require("path");
const app = express();
const port = 3000;

const db = require('./config/db');


// connect DB
db.connect();

const route = require('./routes')

app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine('hbs', handlebars(
  {
    extname: '.hbs'
  }
));

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

// route init 
// truyển express instance vào trong route ->index.js 
route(app);


// 127.0.0.1 - localhost:3000
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});