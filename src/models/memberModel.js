const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new mongoose.Schema({
id: { 
   type: String, 
   unique: true, 
   required: true 
},
community: { 
   type: String 
},
user: { 
   type: String
},
role: { 
   type: String 
},
created_at: { 
   type: Date 
},
});

const memberModel= mongoose.model("member", memberSchema)
module.exports = memberModel;