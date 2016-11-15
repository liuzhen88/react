import React from 'react';
import '../style/search.css';
import actions from '../actions/action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

let Search = ({data,dispatch}) => {
	return (
		<div>
			<div className='search-header'>
				<div className='search-container'>
					<input type='text' 
						id='search-key' 
						placeholder='输入需要查询的关键字'
						onKeyUp={()=>dispatch(actions.searchAsyncAction())} />
				</div>
			</div>
			<div className='search-result-container'>
				{
					data.map(function(item){
						return 	<Link to={
									{
										pathname:'/shopDetail',
										query:{
											id:item._id
										}
									}
								} key={item._id}>
									<div className='search-list-container'>
										<div className='search-list-left'>
											<img src={item.url}/>
										</div>
										<div className='search-list-right'>
											<div className='search-list-name'>{item.name}</div>
											<p className='search-list-num'>月销: {item.num} ， 好评:{item.comment}</p>
											<p className='search-list-price'>{item.price}</p>
										</div>
									</div>
								</Link>
					})
				}
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		data:state.searchData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

Search = connect(mapStateToProps)(Search);

export default Search;