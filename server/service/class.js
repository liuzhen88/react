var q = require('q');
var classSchema = require('../schema/class');
var config = require('../config/config');
function save(req, res){
	var deferred = q.defer();
	var url = req.body.url;
	var name = req.body.name;
	var comment = req.body.comment;
	var sale = req.body.sale;
	var price = req.body.price;
	var className = req.body.className;

	var classModel = new classSchema({
		url:url,
		name:name,
		comment:comment,
		sale:sale,
		price:price,
		className:className
	});

	classModel.save(function(err){
		if(err){
			deferred.reject(err);
		}else{
			deferred.resolve(config.data.success);
		}
	})

	return deferred.promise;
}

function getClassDetail(req, res){
	var deferred = q.defer();
	var className = req.query.className;
	classSchema.find({
		className:className
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
	getClassDetail:getClassDetail
}