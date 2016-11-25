var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username:String,
	password:String
});

var userModel = mongoose.model('users',userSchema);

module.exports = userModel;