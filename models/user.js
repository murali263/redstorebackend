const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:String,
  password:Number
})


module.exports = mongoose.model('user',userSchema,'users')
