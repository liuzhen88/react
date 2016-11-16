var express = require('express');
var router = express.Router();
var recommand = require('../service/recommand');
var guess = require('../service/guess');
var classService = require('../service/class');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addRecommand',function(req,res){
	recommand.save(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/recommend',function(req,res){
	recommand.getRecommend(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.post('/addGuess',function(req,res){
	guess.save(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/getGuess',function(req,res){
	guess.getGuess(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/getDetail',function(req,res){
	guess.getDetail(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/getSearchDataByKey',function(req,res){
	guess.getSearchDataByKey(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.post('/saveClassDetail',function(req,res){
	classService.save(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/getClassDetail',function(req,res){
	classService.getClassDetail(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

module.exports = router;
