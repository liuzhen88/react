var mongoose = require('mongoose');

var shopCartShcema = new mongoose.Schema({
	name:String,
	username:String,
	cart:[
		{
			url:String,
			name:String,
			price:String,
			sale:String,
			shop_goods_id:String,
			comment:String
		}
	]
});

var shopCartModel = mongoose.model('shopcarts',shopCartShcema);

module.exports = shopCartModel;