const express = require("express");
const router = express.Router();
const controllers = require("../controllers/adminControllers");


router.put("/validate/:id", controllers.validate);

router.put("/block/:id", controllers.block);

router.put("/setAdmin/:id", controllers.setAdmin);
router.put("/setAgent/:id", controllers.setAgent);
router.put("/setResponsible/:id", controllers.setResponsible);


module.exports = router;
