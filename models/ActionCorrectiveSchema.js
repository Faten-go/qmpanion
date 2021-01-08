const mongoose = require("mongoose");
const schema = mongoose.Schema;

const actionCorrectiveSchema = new schema({
  //_id: schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  
  status: {
    type: String,
    
  },

  description: {
    type: String,
   
  },

  responsible: { type: schema.Types.ObjectId, ref: 'user', required: false},


  createdAt : {
    type:Date,
  },

 createdBy: {type: schema.Types.ObjectId, ref: 'user', required: false},
  


 modifiedAt: {
    type: Date,
  },



  anomalies: [{ type: schema.Types.ObjectId, ref: 'anomalie', required: false }]

});



module.exports =ActionCorrective = mongoose.model("actionCorrective", actionCorrectiveSchema);