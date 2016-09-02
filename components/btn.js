import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/action';

let ButtonComponent = ({clickData,dispatch}) =>{
	return (
		<div>
			<button onClick={()=>dispatch(actions.clickAction("click action"))}>点击改变store</button>
			<div>{clickData}</div>
		</div>
	)
}


const mapStateToProps = (state) =>{
	return {clickData:state.text}
}
const mapDispatchToProps = (dispatch) =>{
	return{
        actions : bindActionCreators({clickAction:actions.clickAction},dispatch)
    }
}

ButtonComponent = connect(mapStateToProps)(ButtonComponent);

export default ButtonComponent;