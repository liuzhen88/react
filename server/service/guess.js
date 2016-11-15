var q = require('q');
var guessSchema = require('../schema/guessSchema');
var config = require('../config/config');
var recommandSchema = require('../schema/recommandSchema');

function save(req, res){
	var deferred = q.defer();
	var url = req.body.url;
	var name = req.body.name;
	var price = req.body.price;
	var index = req.body.index;

	var guessModel = new guessSchema({
		url:url,
		name:name,
		price:price,
		index:index
	});

	guessModel.save(function(err){
		if(err){
			console.log(err);
			deferred.reject(err);
		}else{
			deferred.resolve(config.data.success);
		}
	});

	return deferred.promise;
}

function getGuess(req, res){
	var deferred = q.defer();
	guessSchema.find({}).exec(function(err,docs){
		if(err){
			console.log(err);
			deferred.reject(err);
		}else{
			deferred.resolve(docs);
		}
	});

	return deferred.promise;
}

function getDetail(req, res){
	var deferred = q.defer();
	var id = req.query.id;
	guessSchema.findOne({
		'_id':id
	},function(err,docs){
		if(err){
			console.log(err);
			deferred.reject(err);
		}else{
			if(!docs){
				recommandSchema.findOne({
					"_id":id
				},function(err,dd){
					if(err){
						deferred.reject(err);
					}else{	
						deferred.resolve(dd);
					}
				});
			}else{
				deferred.resolve(docs);
			}
		}
	});

	return deferred.promise;
}

function getSearchDataByKey(req, res){
	var deferred = q.defer();
	var key = req.query.key;
	guessSchema.find({
		"name":{
			$regex:key
		}
	},function(err,docs){
		if(err){
			deferred.reject(err);
		}else{
			deferred.resolve(docs);
		}
	});

	return deferred.promise;
}

module.exports = {
	save:save,
	getGuess:getGuess,
	getDetail:getDetail,
	getSearchDataByKey:getSearchDataByKey
}