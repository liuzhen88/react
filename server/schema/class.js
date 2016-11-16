var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
	url:String,
	name:String,
	comment:String,
	sale:String,
	price:String,
	className:String
});

var classModel = mongoose.model('classgoods',classSchema);

module.exports = classModel;