const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { firstName, lastName, email, password, imageLink } = req.body;
  
  try {
    
    const role= "Agent qualité";
    const newUser = new User({ firstName, lastName, email, password, imageLink, role, isValidated: false });

    // check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: "email already exists" });
    }

    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    //console.log(hashedPassword);
    newUser.password = hashedPassword;

    // save the user
    const newUserToken = await newUser.save();

    // // generate a token
    // const payload = {
    //   _id: newUserToken._id,
    //   name: newUserToken.name,
    // };
    // const token = await jwt.sign(payload, process.env.SecretOrKey, {
    //   expiresIn: 3600,
    // });
    
    res.status(200).send({
    //   user: newUserToken,
        msg: "utilisateur enregistré, l'administtrateur doit encore vous valider"
    //   token: ` Bearer ${token}`,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not save the user" });
  }
};

exports.login = async (req, res) => {
  
    const { email, password } = req.body;
  
    try {
        //   find if the user exist
        const searchedUser = await User.findOne({ email });
        // if the email does not exist
        if (!searchedUser) {
            return res.status(400).send({ msg: "bad Credential" });
        }

        // check if user is validated
        if (!searchedUser.isValidated) {
          return res.status(400).send({ msg: "Utilisateur non validé" });
      }

        // password are equals
        const match = await bcrypt.compare(password, searchedUser.password);

        if (!match) {
            return res.status(400).send({ msg: "bad Credential" });
        }

        // generate a token
        const payload = {
            _id: searchedUser._id,
            name: searchedUser.firstName,
        };
        const token = await jwt.sign(payload, process.env.SecretOrKey, {
            expiresIn: 3600,
        });

        // send the user
        res
            .status(200)
            .send({ user: searchedUser, msg: "success", token: ` Bearer ${token}` });

    } catch (error) {

        console.log(error);
        res.status(500).send({ msg: "can not get the user" });

  }
};

exports.current = (req, res) => {
      res.status(200).send({ user: req.user });
}; 

exports.getAllUsers = async (req, res) => {
  try {
    const response = await User.find();
    //setTimeout((function() { res.send({ response: response, message: "Opération réussie !" })}), 5000);
    //setTimeout((function() { res.send(items)}), 2000);
    res.send({ response: response, message: "Opération réussie !" });
  } catch (error) {
    res.status(400).send({ message: "Echec! Réessayer SVP!" });
  }
};


exports.changeAccount = async (req, res) => {
  const { id, firstName, lastName, email, oldPassword, imageLink } = req.body;
  
  try {
    //const newUser = new User({ firstName, lastName, email, password, imageLink });

    // check if the email exist
    console.log(id)
    const searchedUser = await User.findById(id);
    console.log(searchedUser)

    if (!searchedUser) {
      return res.status(400).send({ msg: "User does not exist" });
    }

    const changedData = {firstName, lastName, email, imageLink}

    // hash password
    if (!oldPassword) {
      const salt = 10;
      const genSalt = await bcrypt.genSalt(salt);
      const hashedPassword = await bcrypt.hash(oldPassword, genSalt);
      //console.log(hashedPassword);
      password = hashedPassword;
      changedData = {firstName, lastName, email, password, imageLink}
    }

    try {
      const response = await User.updateOne(
        { _id: id },
        { $set: changedData }
      );
      response.nModified
        ? res.send({ message: "updated !" })
        : res.send({ message: "nothing to update !" });
    } catch (error) {
      console.log(error)
      res.status(400).send({ message: " cannot be found !" });
    }
    

    // save the user
    //const newUserToken = await newUser.save();

    // generate a token
    // const payload = {
    //   _id: newUserToken._id,
    //   name: newUserToken.name,
    // };
    // const token = await jwt.sign(payload, process.env.SecretOrKey, {
    //   expiresIn: 3600,
    // });
    
    // res.status(200).send({
    //   user: newUserToken,
    //   msg: "user is saved",
    //   token: ` Bearer ${token}`,
    // });

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not save the user" });
  }
};