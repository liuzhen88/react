var config = {
	dbUrl:"mongodb://120.25.152.42/liuzhen",
	data:{
		success:{
			code:'200',
			message:'ok'
		},
		noSession:{
			code:'80001',
			message:'登录超时或未登录'
		}
	},
	login:{
		success:{
			code:'200',
			message:'登录成功'
		},
		notExist:{
			code:'80001',
			message:'该用户不存在'
		},
		errorPassword:{
			code:'80001',
			message:'密码错误'
		}
	},
	redisUrl:'120.25.152.42'
}
module.exports = config;