const router = require("express").Router();
const specialRoutes = require("./specials");
const tackExchangeRoutes = require("./tackExchange");

// specials routes
router.use("/specials", specialRoutes);
// tackexchange routes
router.use("/tack-exchange", tackExchangeRoutes);

module.exports = router;
