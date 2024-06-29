const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

app.listen(3001, () => {
  console.clear();
  console.log("Server is running on port http://localhost:3001");
});
