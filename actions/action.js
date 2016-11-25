import config from '../components/config';

const serverUrl = config.serverUrl;
const guessUrl = "http://120.25.152.42:4000/guess";
import $ from 'jquery';

let Guess = () => {
	return function(dispatch,getState){
		fetch(guessUrl)
		.then(function(response){
			return response.json()
		})
		.then(
			data => dispatch(handleGuess(data))
		)
	}
};

let handleGuess = (data) => {
	return {
		type:'GUESS',
		guess:data
	}
};

let recommendAsyncAction = () => {
	return function(dispatch,getState){
		var storeData = getState();
		var page = storeData.recommend.page;
		let recommendUrl = serverUrl+'/recommend?page='+page;
		fetch(recommendUrl)
		.then(function(response){
			return response.json()
		})
		.then(
			data => dispatch(recommendAction(data))
		)
	}
}

let recommendAction = (data) => {
	return {
		type:'TOADY_RECOMMEND',
		// recommendData:data.data,
		// page:data.page
		recommend:data
	}
}

let searchAsyncAction = () => {
	return function(dispatch,getState){
		var val = $("#search-key").val();
		val = $.trim(val);
		if(val){	
			let searchUrl = serverUrl+'/getSearchDataByKey?key='+val;
			fetch(searchUrl)
			.then(function(response){
				return response.json();
			})
			.then(
				data => dispatch(searchAction(data))
			)
		}
	}
}

let searchAction = (data) => {
	return {
		type:'SEARCH',
		list:data
	}
}

export default {
	Guess:Guess,
	recommendAsyncAction:recommendAsyncAction,
	searchAsyncAction:searchAsyncAction
}