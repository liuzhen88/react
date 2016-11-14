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

export default {
	Guess:Guess
}