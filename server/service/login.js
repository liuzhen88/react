var q = require('q');
var userSchema = require('../schema/userSchema');
var config = require('../config/config');
var md5 = require('blueimp-md5');
var redis = require('./redis');

function login(req, res){
	var deferred = q.defer();
	var username = req.body.username;
	var password = req.body.password;
	userSchema.findOne({
		'username':username
	},function(err,docs){
		if(err){
			deferred.reject(err);
		}else{
			if(!docs){
				//没有该用户
				deferred.resolve(config.login.notExist);
			}else{
				var reallyPassword = docs.password;
				if(password != reallyPassword){
					deferred.resolve(config.login.errorPassword);
				}else{
					// req.session.user = docs;
					// console.log(req.session);
					// console.log('===============================');
					var value = username + password + (new Date().getTime()).toString();
					var hash = md5(value);
					var data = {
						username:username,
						password:password,
						key:hash
					};
					redis.get('session',function(err,sessions){
						var sessions = JSON.parse(sessions);
						if(!sessions || sessions.length == 0){
							//create
							var arr = [];
							arr.push(data);
							redis.set('session',JSON.stringify(arr),function(err){
								if(err){
									deferred.reject(err);
								}else{
									var context = config.login.success;
									context.key = hash;
									deferred.resolve(context);
								}
							});
						}else{
							//update
							sessions.push(data);
							redis.set('session',JSON.stringify(sessions),function(err){
								if(err){
									deferred.reject(err);
								}else{
									deferred.resolve(config.login.success);
								}
							});
						}
					});
				}
			}
		}
	});

	return deferred.promise;
}


function addUser(req, res){
	var deferred = q.defer();
	var username = req.body.username;
	var password = req.body.password;
	var userModel = new userSchema({
		username:username,
		password:password
	});
	userModel.save(function(err){
		if(err){
			deferred.reject(err);
		}else{
			deferred.resolve(config.data.success);
		}
	});

	return deferred.promise;
}

module.exports = {
	login:login,
	addUser:addUser
}