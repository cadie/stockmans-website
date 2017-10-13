const router = require("express").Router();
const tackExchangeController = require("../../controllers/tackExchangeController");

// Matches with "/api/tack-exchange"
router.route("/")
  .get(tackExchangeController.findAll)
  .post(tackExchangeController.create);

// Matches with "/api/tack-exchange/:id"
router
  .route("/:id")
  .get(tackExchangeController.findById)
  .put(tackExchangeController.update)
  .delete(tackExchangeController.remove);

module.exports = router;
