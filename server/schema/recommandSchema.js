var mongoose = require('mongoose');

var recommandModle = new mongoose.Schema({
	url:String,
	name:String,
	price:String,
	index:String,
	sale:String
});

var recommandSchema = mongoose.model('recommand',recommandModle);

module.exports = recommandSchema;