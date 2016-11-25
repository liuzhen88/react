var q = require('q');
var userInfo = require('./userInfo');
var shopCartSchema = require('../schema/cartSchema');
var guessSchema = require('../schema/guessSchema');
var config = require('../config/config');
var recommandSchema = require('../schema/recommandSchema');
var classSchema = require('../schema/class');

var cart = {
	addShopCart:function(req, res){
		var deferred = q.defer();
		userInfo.getUserInfo(req)
		.then(function(info){
			return cart.getGoodsInfo(req,info);
		})
		.then(function(goodsData){
			return cart.handleShopCart(req, goodsData.info, goodsData.data);
		})
		.then(function(result){
			deferred.resolve(result);
		})
		.fail(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	},
	handleShopCart:function(req, info, goodsData){
		var deferred = q.defer();
		var username = info.username;
		var id = req.query.id;
		shopCartSchema.findOne({
			'name':'shop_cart',
			'username':username
		},function(err,docs){
			if(err){
				console.log(err);
				deferred.reject(err);
			}else{
				if(!docs){
					//create
					var shopCartModel = new shopCartSchema({
						'name':'shop_cart',
						'username':username,
						'cart':[
							{
								url:goodsData.url,
								name:goodsData.name,
								price:goodsData.price,
								sale:goodsData.sale
							}
						]
					});
					shopCartModel.save(function(err){
						if(err){
							deferred.reject(err);
						}else{
							deferred.resolve(config.data.success);
						}
					});
				}else{
					//update
					var cartArr = docs.cart;
					var obj = {
						url:goodsData.url,
						name:goodsData.name,
						price:goodsData.price,
						sale:goodsData.sale
					};
					cartArr.push(obj);
					shopCartSchema.update({
						'name':'shop_cart',
						'username':username
					},{
						$set:{
							cart:cartArr
						}
					},function(err){
						if(err){
							deferred.reject(err);
						}else{
							deferred.resolve(config.data.success);
						}
					});
				}
			}
		});

		return deferred.promise;
	},
	getGoodsInfo:function(req, info){
		var deferred = q.defer();
		var id = req.query.id;
		var result = {
			info:info
		};
		guessSchema.findOne({
			"_id":id
		},function(err,docs1){
			if(err){
				deferred.reject(err);
			}else{
				if(!docs1){
					recommandSchema.findOne({
						'_id':id
					},function(err,docs2){
						if(err){
							deferred.reject(err);
						}else{
							if(!docs2){
								classSchema.findOne({
									'_id':id
								},function(err,docs3){
									if(err){
										deferred.reject(err);
									}else{
										result.data = docs3;
										deferred.resolve(result);
									}
								});
							}else{
								result.data = docs2;
								deferred.resolve(result);
							}
						}
					});
				}else{
					result.data = docs1;
					deferred.resolve(result);
				}
			}
		});

		return deferred.promise;
	}
};

module.exports = cart;