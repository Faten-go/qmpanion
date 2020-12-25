const mongoose = require("mongoose");
const schema = mongoose.Schema;

const anomalieSchema = new schema({
  _id: schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  
});
module.exports =Anomalie = mongoose.model("anomalie", anomalieSchema);