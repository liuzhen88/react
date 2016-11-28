var express = require('express');
var router = express.Router();
var recommand = require('../service/recommand');
var guess = require('../service/guess');
var classService = require('../service/class');
var check = require('../service/check');
var login = require('../service/login');
var cart = require('../service/cart');
var pay = require('../service/pay');

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

router.get('/checkLogin',function(req,res){
	check.checkLogin(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.post('/addUser',function(req,res){
	login.addUser(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.post('/login',function(req,res){
	login.login(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/addShopCart',function(req,res){
	cart.addShopCart(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/getShopCartData',function(req, res){
	cart.getShopCartData(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

router.get('/getPayOrderDataById',function(req,res){
	pay.getPayOrderDataById(req,res).then(function(data){
		res.send(data);
	}).fail(function(err){
		res.send(err);
	});
});

module.exports = router;
