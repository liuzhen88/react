var mongoose = require('mongoose');

var guessSchema = new mongoose.Schema({
	url:String,
	name:String,
	price:String,
	index:String,
	sale:String
});

var guessModel = mongoose.model('guess',guessSchema);

module.exports = guessModel;