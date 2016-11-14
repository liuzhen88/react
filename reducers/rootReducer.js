import {combineReducers} from 'redux';

const changeTodayRecommend = (state='',action) => {
	switch(action.type){
		case "TOADY_RECOMMEND":
			return action.recommend;
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
	recommend:changeTodayRecommend,
	guess:handleGuess,
	classData:classDataReducer,
	page:changeTodayRecommend
});

export default rootReducer;

