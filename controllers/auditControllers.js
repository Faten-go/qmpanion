const audit = require("../models/AuditSchema");

exports.getAllAudits = async (req, res) => {
    try {
      const response = await audit.find();
      //setTimeout((function() { res.send({ response: response, message: "Opération réussie !" })}), 5000);
      //setTimeout((function() { res.send(items)}), 2000);
      res.send({ response: response, message: "Opération réussie !" });
    } catch (error) {
      res.status(400).send({ message: "Echec! Réessayer SVP!" });
    }
  };


  exports.getOneAudit = async (req, res) => {
    try {
      const response = await audit.findOne({ _id: req.params.id });
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

