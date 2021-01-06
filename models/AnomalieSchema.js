const mongoose = require("mongoose");
const schema = mongoose.Schema;

const anomalieSchema = new schema({
  //_id: schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  
  status: {
    type: String,
    
  },

  severity: {
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


  audits: [{ type: schema.Types.ObjectId, ref: 'audit', required: false }]


});



module.exports =Anomalie = mongoose.model("anomalie", anomalieSchema);