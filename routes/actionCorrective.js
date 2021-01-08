 const express = require("express");
const router = express.Router();
const actionCorrective = require("../models/ActionCorrectiveSchema");
const controllers = require("../controllers/actionCorrectiveControllers"); 


 // get all
 router.get("/", controllers.getAllActionCorrectives);

  //get by id
 router.get("/:id", controllers.getOneActionCorrective);

 // delete by id
 router.delete("/:id", controllers.delete);

 // update
 router.put("/:id", controllers.update);

// post
 router.post("/", controllers.postActionCorrective);


module.exports = router;