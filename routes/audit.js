const express = require("express");
const router = express.Router();
const audit = require("../models/AuditSchema");
const controllers = require("../controllers/auditControllers");


// get all
router.get("/", controllers.getAllAudits);

// get by id
router.get("/:id", controllers.getOneAudit);

// delete by id
router.delete("/:id", controllers.delete);


module.exports = router;