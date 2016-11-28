var q = require('q');
var guessSchema = require('../schema/guessSchema');
var config = require('../config/config');
var recommandSchema = require('../schema/recommandSchema');
var classSchema = require('../schema/class');

module.exports = {
	getPayOrderDataById:function(req, res){
		var deferred = q.defer();
		var id = req.query.id;
		guessSchema.findOne({
			'_id':id
		},function(err,docs){
			if(err){
				deferred.reject(err);
			}else{
				if(!docs){
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
										deferred.resolve(docs3);
									}
								})
							}else{
								deferred.resolve(docs2);
							}
						}
					});
				}else{
					deferred.resolve(docs);
				}
			}
		});

		return deferred.promise;
	},
	

}