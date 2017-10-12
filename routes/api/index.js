const router = require("express").Router();
const specialRoutes = require("./specials");

// Book routes
router.use("/specials", specialRoutes);

module.exports = router;
