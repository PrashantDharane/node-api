const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
  name: {
    type: String,
    required : [true,"Name is mandatory"]
  },
  rank: {
    type:String
  },
  availability: {
    type: Boolean,
    default: false
  }
});


const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;
