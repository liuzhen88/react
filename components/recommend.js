import React from 'react';
import '../style/recommend.css';
import actions from '../actions/action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

let Recommend = ({todayRecommend,dispatch}) => {
	return (
		<div className='recommend'>
			<div className='recommend-container'>
				<div className='recommend-title-container'>
					<div className='recommend-title'>今日推荐</div>
					<div className='change-recommend-content'>换一批</div>
				</div>
			</div>
			<ul id='recommend-shop-container'>
				{
					todayRecommend.map(function(item){
						return <li className='recommend-shop-list' key={item.index}>
									<a>
										<img src={item.url}/>
									</a>
									<p className='shop-name'>{item.name}</p>
									<p className='shop-price'>{item.price}</p>
								</li>
					})
				}
			</ul>
			<div className='clear'></div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		todayRecommend:state.todayRecommend
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions:bindActionCreators(actions,dispatch)
	}
};

Recommend = connect(mapStateToProps)(Recommend);

export default Recommend;