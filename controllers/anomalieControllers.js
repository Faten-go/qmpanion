const anomalie = require("../models/AnomalieSchema");

// exports.getAllAnomalies = async (req, res) => {
//     try {
//       const response = await anomalie.find();
//       //setTimeout((function() { res.send({ response: response, message: "Opération réussie !" })}), 5000);
//       //setTimeout((function() { res.send(items)}), 2000);
//       res.send({ response: response, message: "Opération réussie !" });
//     } catch (error) {
//       res.status(400).send({ message: "Echec! Réessayer SVP!" });
//     }
//   };


//   exports.getOneAnomalie = async (req, res) => {
//     try {
//       const response = await anomalie.findOne({ _id: req.params.id });
//       response === null
//         ? res.send({
//             response: response,
//             message: " aucun audit trouvé ! vérifier !",
//           })
//         : res.send({ response: response, message: "opération réussie !" });
//     } catch (error) {
//       res.status(400).send({ message: "pas d'audit pour cet id !" });
//     }
//   };

//   exports.delete = async (req, res) => {
//     try {
//       const response = await anomalie.deleteOne({ _id: req.params.id });
//       response.n
//         ? res.send({
//             response: response,
//             message: "opération réussie !",
//           })
//         : res.send({ message: "pas d'audit avec cet id " });
//     } catch (error) {
//       res.status(400).send({ message: "non supprimé ! " });
//     }
//   };



//   exports.update = async (req, res) => {
        
//     try {
//       const response = await anomalie.updateOne(
//         { _id: req.params.id },
//         { $set: { ...req.body } }
//       );
//       response.nModified
//         ? res.send({ message: "updated !" })
//         : res.send({ message: "nothing to update !" });
//     } catch (error) {
//       res.status(400).send({ message: " cannot be found !" });
//     }
//   };

//   exports.postAnomalie = async (req, res) => {
//     try {
//       const newAnomalie = new anomalie({ ...req.body });
//       !newAnomalie.deadline || !newAnomalie.name
//         ? res.status(400).send({
//             message: "you left a required field empty , please check again !",
//           })
//         : "";

//         const date = new Date();

//         newAnomalie.status= "En cours";
//         newAnomalie.modifiedAt= date.toISOString();
//         newAnomalie.createdAt= date.toISOString();

//       const response = await newAnomalie.save();
//       res.send({ response: response, message: "audit created !" });
//     } catch (error) {
//       res.status(400).send({ message: "can not save this audit !" });
//     }
//   };