const express = require("express");
const config = require("./config/config");
const routes = require("./routes");

const app = express();
const PORT = config.appPort;

app.use(express.json());
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
