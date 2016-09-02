import {combineReducers} from 'redux';

const clickAction = (state='',action)=>{
	switch(action.type){
		case "CHANGE_ME":
			return {
				text:"1234567890"
			}
		default:
			return state;
	}
}

const showThunkData = (state='',action)=>{
	console.log(action);
	switch(action.type){
		case "THUNK_DATA":
			return{
				asyncData:action.asyncData,
				dataArray:action.dataArray
			}
		default :
			return state;
	}
}

// export default combineReducers({
// 	clickAction,
// 	showThunkData
// });

export default showThunkData;