const audit = require("../models/AuditSchema");

exports.getAllAudits = async (req, res) => {
    try {
      const response = await audit.find().populate('responsible');
      //setTimeout((function() { res.send({ response: response, message: "Opération réussie !" })}), 5000);
      //setTimeout((function() { res.send(items)}), 2000);
      res.send({ response: response, message: "Opération réussie !" });
    } catch (error) {
      res.status(400).send({ message: "Echec! Réessayer SVP!" });
    }
  };


  exports.getOneAudit = async (req, res) => {
    try {
      const response = await audit.findOne({ _id: req.params.id }).populate('anomalies').populate('createdBy').populate('responsible');
      response === null
        ? res.send({
            response: response,
            message: " aucun audit trouvé ! vérifier !",
          })
        : res.send({ response: response, message: "opération réussie !" });
    } catch (error) {
      res.status(400).send({ message: "pas d'audit pour cet id !" });
    }
  };

  exports.delete = async (req, res) => {
    try {
      const response = await audit.deleteOne({ _id: req.params.id });
      response.n
        ? res.send({
            response: response,
            message: "opération réussie !",
          })
        : res.send({ message: "pas d'audit avec cet id " });
    } catch (error) {
      res.status(400).send({ message: "non supprimé ! " });
    }
  };



  exports.update = async (req, res) => {
        
    try {
      const response = await audit.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      response.nModified
        ? res.send({ message: "updated !" })
        : res.send({ message: "nothing to update !" });
    } catch (error) {
      res.status(400).send({ message: " cannot be found !" });
    }
  };




  exports.postAudit = async (req, res) => {
    try {
      const newAudit = new audit({ ...req.body });
      !newAudit.deadline || !newAudit.name
        ? res.status(400).send({
            message: "you left a required field empty , please check again !",
          })
        : "";

        const date = new Date();

        //var empty_array = {};

        newAudit.status= "En cours";
        newAudit.modifiedAt= date.toISOString();
        newAudit.createdAt= date.toISOString();

      const response = await newAudit.save();
      res.send({ response: response, message: "audit created !" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "can not save this audit !" });
    }
  };