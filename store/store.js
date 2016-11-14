import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import actions from '../actions/action';

let initState = {
	todayRecommend:[
		{
			url:'http://img.aigegou.com/shop/store/goods/27001/2016/04/23/27001_05147476975264433.jpg-recommend',
			name:'单人经济房',
			price:'￥180',
			index:0
		},
		{
			url:'http://img.aigegou.com/shop/store/goods/8047/2016/04/05/8047_05131871368964092.jpg-recommend',
			name:'特色羊肚',
			price:'￥18',
			index:1
		},
		{
			url:'http://img.aigegou.com/shop/store/goods/25139/2016/03/15/25139_05113677773295741.jpg-recommend',
			name:'牛肉',
			price:'￥38',
			index:2
		},
		{
			url:'http://img.aigegou.com/shop/store/goods/28534/2016/04/15/28534_05140347068997446.jpg-recommend',
			name:'招牌烤鱼',
			price:'￥38',
			index:3
		}
	],
	guess:[]
};


let store = createStore(
	reducers,
	initState,
	applyMiddleware(thunk)
);


export default store;