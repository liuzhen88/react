import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store/index';
import App from './components/App';
import TestComponent from './components/test';
import {Router,Route,Link,browserHistory} from 'react-router';

//租户系统地址

store.subscribe(
	() => {store.getState()}
);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/lz' component={App}>
				
			</Route>
			<Route path='/lz/user' component={TestComponent}></Route>	
		</Router>	
	</Provider>,
	document.getElementById("root"),
	function(){
		console.log("run success");
	}
)