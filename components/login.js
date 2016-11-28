import React from 'react';
import '../style/login.css';
import back from 'url?limit=1000!../images/back.png';
import $ from 'jquery';
import cookie from './cookie';
import config from './config';

const serverUrl = config.serverUrl;

let Login = React.createClass({
	goBack(){
		history.back();
	},
	handleLogin(){
		let username = document.getElementById('username').value;
		let password = document.getElementById('password').value;
		let url = serverUrl+'/login';
		$.ajax({
			url:url,
			type:'post',
			dataType:'json',
			data:{
				username:username,
				password:password
			},
			success:function(data){
				if(data.code == '200'){
					var key = data.key;
					localStorage.setItem('key',key);
					cookie.addcookie('key',key);
					history.back();
				}else{
					alert(data.message);
				}
			},
			error:function(err){
				alert(err);
			}
		})
	},
	render(){
		return (
			<div>
				<div className='login-title'>登录
					<div className='back'>
						<a onClick={this.goBack}>
							<img src={back} width='20px'/>
						</a>
					</div>
				</div>
				<div className='username'>
					<label className='username-label'>用户名：</label>
					<input type='text' placeholder='请输入手机号码' id='username'/>
				</div>
				<div className='password'>
					<label className='password-label'>密	码：</label>
					<input type='text' placeholder='请输入密码' id='password'/>
				</div>
				<div className='login-container'>
					<button className='login' onClick={this.handleLogin}>登录</button>
				</div>
			</div>
		)
	}
});

export default Login;