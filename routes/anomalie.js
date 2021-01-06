const express = require("express");
const router = express.Router();
const anomalie = require("../models/AnomalieSchema");
const controllers = require("../controllers/anomalieControllers");


//get all
router.get("/", controllers.getAllAnomalies);

//get by id
router.get("/:id", controllers.getOneAnomalie);

//delete by id
router.delete("/:id", controllers.delete);

//update
router.put("/:id", controllers.update);

//post
router.post("/", controllers.postAnomalie);


module.exports = router;