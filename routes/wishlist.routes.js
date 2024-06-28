const { Router } = require("express");
const router = Router();

const { WishlistControllers } = require("../controllers");

router.get("/wishlists", WishlistControllers.getWishlist);
router.get("/wishlists/:id(\\d+)", WishlistControllers.getWishlistDetail);
router.post("/wishlists", WishlistControllers.addWishlist);
router.put("/wishlists/:id(\\d+)",  WishlistControllers.updateWishlist);
router.delete("/wishlists/:id(\\d+)", WishlistControllers.deleteWishlist);

module.exports = router;
