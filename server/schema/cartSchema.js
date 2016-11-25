var mongoose = require('mongoose');

var shopCartShcema = new mongoose.Schema({
	name:String,
	username:String,
	cart:[
		{
			url:String,
			name:String,
			price:String,
			sale:String
		}
	]
});

var shopCartModel = mongoose.model('shopcarts',shopCartShcema);

module.exports = shopCartModel;