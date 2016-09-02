import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/action';
import {Link} from 'react-router'; 

let ThunkComponent = ({clickDatas,dataArray,dispatch}) =>{
	return (
		<div>
			<button onClick={()=>dispatch(actions.thunkHandle(clickDatas))}>thunk解决异步action问题</button>
			<div><Link to={'/lz/user'}>{clickDatas}</Link></div>
			<div>
				{
					dataArray.map(function (item) {
                        return <div className="item" key={item.departmentcode}>{item.departmentname}</div>
                    })
				}
			</div>
		</div>
	)
}


const mapStateToProps = (state) =>{
	return {clickDatas:state.asyncData,dataArray:state.dataArray}
}
const mapDispatchToProps = (dispatch) =>{
	return{
        actions : bindActionCreators({thunkHandle:actions.thunkHandle},dispatch)
    }
}

ThunkComponent = connect(mapStateToProps)(ThunkComponent);

export default ThunkComponent;