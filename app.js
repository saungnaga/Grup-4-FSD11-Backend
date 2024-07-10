const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const routes = require("./routes");

const app = express();
const PORT = config.appPort;

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(routes);

app.listen(PORT, () => {
  console.clear();
  console.debug(`Server is running on port http://localhost:${PORT}`);
});