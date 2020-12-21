const mongoose = require("mongoose");
const schema = mongoose.Schema;

const auditSchema = new schema({
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
    required: true,
  },
  responsable: {
    type: String,
    required: true,
  },
  createdby: {
    type: String,
    required: true,
  },
});
module.exports =Audit = mongoose.model("audit", auditSchema);