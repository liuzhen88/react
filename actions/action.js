const guessUrl = "http://120.25.152.42:4000/guess";

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
		let recommendUrl = 'http://120.25.152.42:4000/recommend?page='+page;
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

export default {
	Guess:Guess,
	recommendAsyncAction:recommendAsyncAction
}