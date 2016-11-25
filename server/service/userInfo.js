var redis = require('./redis');
var q = require('q');

var userInfo = {
	getUserInfo:function(req){
		var deferred = q.defer();
		var key = req.query.key;
		if(!key){
			deferred.resolve({});
		}else{
			redis.get('session',function(err,data){
				if(err){
					deferred.reject(err);
				}else{
					var data = JSON.parse(data);
					var info = {};
					data.forEach(function(value,index){
						if(key == value.key){
							info = value;
						}
					});
					deferred.resolve(info);
				}
			});
		}

		return deferred.promise;
	}
}
module.exports = userInfo;