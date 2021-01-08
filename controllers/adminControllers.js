const User = require("../models/User");

exports.validate = async (req, res) => {
  //const { firstName, lastName, email, password, imageLink } = req.body;
  console.log(req.params.id)

  try {
      
    const response = await User.updateOne(
        { _id: req.params.id },
       // { ...User.isValidated: true }
        { $set: { 'isValidated': true } }
      );
      response.nModified
        ? res.send({ message: "updated !" })
        : res.send({ message: "nothing to update !" });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not update" });
  }
};

exports.block = async (req, res) => {
    //const { firstName, lastName, email, password, imageLink } = req.body;
    console.log(req.params.id)
  
    try {
        
      const response = await User.updateOne(
          { _id: req.params.id },
         // { ...User.isValidated: true }
          { $set: { 'isValidated': false } }
        );
        response.nModified
          ? res.send({ message: "updated !" })
          : res.send({ message: "nothing to update !" });
      
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "can not update" });
    }
  };

  exports.setAgent = async (req, res) => {
    //const { firstName, lastName, email, password, imageLink } = req.body;
    console.log(req.params.id)
  
    try {
        
      const response = await User.updateOne(
          { _id: req.params.id },
         // { ...User.isValidated: true }
          { $set: { 'role': 'Agent qualité' } }
        );
        response.nModified
          ? res.send({ message: "updated !" })
          : res.send({ message: "nothing to update !" });
      
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "can not update" });
    }
  };

  exports.setAdmin = async (req, res) => {
    //const { firstName, lastName, email, password, imageLink } = req.body;
    console.log(req.params.id)
  
    try {
        
      const response = await User.updateOne(
          { _id: req.params.id },
         // { ...User.isValidated: true }
          { $set: { 'role': 'Admin' } }
        );
        response.nModified
          ? res.send({ message: "updated !" })
          : res.send({ message: "nothing to update !" });
      
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "can not update" });
    }
  };

  exports.setResponsible = async (req, res) => {
    //const { firstName, lastName, email, password, imageLink } = req.body;
    console.log(req.params.id)
  
    try {
        
      const response = await User.updateOne(
          { _id: req.params.id },
         // { ...User.isValidated: true }
          { $set: { 'role': 'Responsable qualité' } }
        );
        response.nModified
          ? res.send({ message: "updated !" })
          : res.send({ message: "nothing to update !" });
      
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "can not update" });
    }
  };

