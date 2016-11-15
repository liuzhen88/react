var q = require('q');
var recommandSchema = require('../schema/recommandSchema');
var config = require('../config/config');

function save(req, res){
	var deferred = q.defer();
	var url = req.body.url;
	var name = req.body.name;
	var price = req.body.price;
	var index = req.body.index;
	var recommandModel = new recommandSchema({
		url:url,
		name:name,
		price:price,
		index:index
	});
	recommandModel.save(function(err){
		if(err){
			console.log(err);
			deferred.reject(err);
		}else{
			deferred.resolve(config.data.success);
		}
	});

	return deferred.promise;
}

function getRecommend(req, res){
	var deferred = q.defer();
	var page = req.query.page;
	if(page == 0){
		recommandSchema.find({}).skip(4).limit(4).exec(function(err,docs){
			if(err){
				console.log(err);
				deferred.reject(err);
			}else{
				var sendData = {
					todayRecommend:docs,
					page:1
				};
				deferred.resolve(sendData);
			}
		});
	}else{
		recommandSchema.find({}).limit(4).exec(function(err,docs){
			if(err){
				console.log(err);
				deferred.reject(err);
			}else{
				var sendData = {
					todayRecommend:docs,
					page:0
				};
				deferred.resolve(sendData);
			}
		});
	}

	return deferred.promise;
}

module.exports = {
	save:save,
	getRecommend:getRecommend
}