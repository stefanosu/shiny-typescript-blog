const express = require("express");

const logger = require("morgan");
const routes = require("./server/routes/server");

const port = 3000;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);



app.listen(port, () => {
  console.log(`Server running at http://:${port}/`);
})

