const router = require("express").Router();
const specialsController = require("../../controllers/specialsController");

// Matches with "/api/specials"
router.route("/")
  .get(specialsController.findAll)
  .post(specialsController.create);

// Matches with "/api/specials/:id"
router
  .route("/:id")
  .get(specialsController.findById)
  .put(specialsController.update)
  .delete(specialsController.remove);

module.exports = router;
