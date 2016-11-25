var q = require('q');
var config = require('../config/config');
var redis = require('./redis');
var _ = require('underscore');

module.exports = {
	checkLogin:function(req, res){
		var deferred = q.defer();
		// console.log('当前用户信息');
		// console.log(req.session);
		// console.log('-----------------------------');
		// if(req.session.user){
		// 	var context = config.data.success;
		// 	deferred.resolve(context);
		// }else{
		// 	var context = config.data.noSession;
		// 	deferred.resolve(context);
		// }
		var key = req.query.key;
		if(!key){
			var context = config.data.noSession;
			deferred.resolve(context);
		}else{
			redis.get('session',function(err,docs){
				if(err){
					deferred.reject(err);
				}else{
					var data = JSON.parse(docs);
					var state = false;
					data.forEach(function(value,index){
						if(value.key == key){
							state = true;
						}
					});
					if(state == false){
						var context = config.data.noSession;
						deferred.resolve(context);
					}else{
						var context = config.data.success;
						deferred.resolve(context);
					}
				}
			});
		}
		return deferred.promise;
	}
}