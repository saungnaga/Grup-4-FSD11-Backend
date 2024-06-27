const express = require("express");
const app = express();
const config = require("./config/config")

const routes = require("./routes");
const PORT = config.appPort || 3001;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(routes);

app.listen(PORT, () => {
    console.clear();
    console.debug(`Server is running on port http://localhost:${PORT}`)
})