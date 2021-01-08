const actionCorrective = require("../models/ActionCorrectiveSchema");

exports.getAllActionCorrectives = async (req, res) => {
  try {
   const response = await actionCorrective.find().populate('responsible');
 res.send({ response: response, message: "Opération réussie !" });
 } catch (error) {
   res.status(400).send({ message: "Echec! Réessayer SVP!" });
   }
};


  exports.getOneActionCorrective = async (req, res) => {
  try {
       const response = await actionCorrective.findOne({ _id: req.params.id }).populate('createdBy').populate('anomalies').populate('responsible').exec();
       response === null
         ? res.send({
             response: response,
             message: " aucun actionCorrective trouvé ! vérifier !",
           })
         : res.send({ response: response, message: "opération réussie !" });
     } catch (error) {
       res.status(400).send({ message: "pas d'actionCorrective pour cet id !" });
     }
   };

   exports.delete = async (req, res) => {
     try {
       const response = await actionCorrective.deleteOne({ _id: req.params.id });
       response.n
         ? res.send({
             response: response,
             message: "opération réussie !",
           })
         : res.send({ message: "pas d'actionCorrective avec cet id " });
     } catch (error) {
       res.status(400).send({ message: "non supprimé ! " });
     }
   };



   exports.update = async (req, res) => {
        
     try {
       const response = await actionCorrective.updateOne(
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

   exports.postActionCorrective = async (req, res) => {
     try {
       const newActionCorrective = new actionCorrective({ ...req.body });
        !newActionCorrective.name
         ? res.status(400).send({
             message: "you left a required field empty , please check again !",
           })
         : "";

         const date = new Date();

         newActionCorrective.status= "En cours";
         newActionCorrective.modifiedAt= date.toISOString();
         newActionCorrective.createdAt= date.toISOString();
         //newActionCorrective.anomalies = [];

       const response = await newActionCorrective.save();
       res.send({ response: response, message: "actionCorrective created !" });
     } catch (error) {
       console.log(error);
       res.status(400).send({ message: "can not save this actionCorrective !" });
     }
   };