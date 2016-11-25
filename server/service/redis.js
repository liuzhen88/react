var redis = require('redis');
var config = require('../config/config');

var client = redis.createClient('6379',config.redisUrl);

client.auth('liuzhen88');

client.on('error',function(err){
	console.log('redis connect is error');
	console.log(err);
});

client.select('0',function(err){
	if(err){
		console.log('client db 0 is error');
		console.log(err);
	}else{
		console.log('connect redis db 0 is success');
	}
});

module.exports = client;