var url = "http://120.25.152.42:9000/getDepartmentname";
export const clickAction = (name) =>{
	return {
		type:"CHANGE_ME",
		name
	}
}


export const thunkHandle = (name) =>{
	return function(dispatch,getState){
		fetch(url)
		.then(function(response){
			return response.json();
		}).then( 
			data => dispatch(showThunkData(data,name))
		) 
	}
}

const showThunkData = (data,name) =>{
	return {
		type:"THUNK_DATA",
		asyncData:name,
		dataArray:data
	}
}

var handle = {
	clickAction:clickAction,
	thunkHandle:thunkHandle
}


export default handle