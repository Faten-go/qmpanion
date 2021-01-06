const mongoose = require("mongoose");
const schema = mongoose.Schema;

const auditSchema = new schema({
  //_id: schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  description: {
    type: String  
  },
  status: {
    type: String,
    //required: true,
  },
  responsable: {
    type: String,
    //required: true,
  },
  createdby: {
    type: String,
    //required: true,
  },
  createdAt: {
    type: Date,
    //required: true,
  },
  modifiedAt: {
    type: Date,
    //required: true,
  },
  anomalies: [{ type: schema.Types.ObjectId, ref: 'anomalie', required: false }]
});
module.exports = Audit = mongoose.model("audit", auditSchema);