import {combineReducers} from 'redux';

const changeTodayRecommend = (state='',action) => {
	switch(action.type){
		case "TOADY_RECOMMEND":
			return state;
			break;
		default:
			return state;
			break;
	}
};

const handleGuess = (state='',action) => {
	switch(action.type){
		case "GUESS":
			return action.guess;
			break;
		default:
			return state;
			break;
	}
}

const classDataReducer = (state='',action) => {
	return state;
}

let rootReducer = combineReducers({
	todayRecommend:changeTodayRecommend,
	guess:handleGuess,
	classData:classDataReducer
});

export default rootReducer;

