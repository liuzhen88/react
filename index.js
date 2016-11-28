import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import store from './store/store';
import {Router,Route,Link,browserHistory} from 'react-router';
import classDetail from './components/classDetail';
import shopDetail from './components/shopDetail';
import Search from './components/search';
import My from './components/my';
import Pay from './components/pay';
import Login from './components/login';
import Cart from './components/cart';
import cookie from './components/cookie';

store.subscribe(
	() => {store.getState()}
);

if(localStorage.getItem('key')){
	cookie.addcookie('key',localStorage.getItem('key'));
}

render(
	<Provider store={store}>
		<Router history = {browserHistory}>
			<Route path = '/' component = {App}></Route>
			<Route path = '/class' component = {classDetail}></Route>
			<Route path = '/shopDetail' component = {shopDetail}></Route>
			<Route path = '/search' component = {Search}></Route>
			<Route path = '/my' component = {My}></Route>
			<Route path = '/pay' component = {Pay}></Route>
			<Route path = '/login' components = {Login}></Route>
			<Route path = '/Cart' components = {Cart}></Route>
		</Router>
	</Provider>,
	document.getElementById('root'),
	function(){
		console.log('react app start success');
	}
)
