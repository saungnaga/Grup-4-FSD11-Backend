const { Router } = require("express");
const router = Router();

const routes = [require("./room.routes")]
for (const route of routes) {
    router.use("/api", routes);   
}

router.all("*", (req, res, next) => {
    return res.status(404).json ({
        message: "error"
    })
})

module.exports = router;