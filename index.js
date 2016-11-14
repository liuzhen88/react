import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import store from './store/store';
import {Router,Route,Link,browserHistory} from 'react-router';
import classDetail from './components/classDetail';

store.subscribe(
	() => {store.getState()}
);


render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}></Route>
			<Route path='/class' component={classDetail}></Route>
		</Router>
	</Provider>,
	document.getElementById('root'),
	function(){
		console.log('react app start success');
	}
)
