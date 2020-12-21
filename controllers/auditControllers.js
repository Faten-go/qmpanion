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

