import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/click_reducer';
import thunk from 'redux-thunk';

let initState = {
	text:"this is init state",
	asyncData:'this is asyncData',
	dataArray:[]
};

let store = createStore(
	reducers,
	initState,
	applyMiddleware(thunk)
);

export default store;