import React from 'react';
import '../style/guess.css';
import actions from '../actions/action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import $ from 'jquery';
import {Link} from 'react-router';
import config from './config';

const serverUrl = config.serverUrl;
const guessUrl = serverUrl+"/getGuess";

var Guess = React.createClass({
	getInitialState(){
		return {
			initData:[]
		}
	},
	componentDidMount(){
		$.get(guessUrl, function(result) {
	      	this.setState({
	      		initData:result
	      	});
	    }.bind(this));
	},
	render(){
		return (
			<div className='guess'>
				<div className='guess-title'>猜你喜欢</div>
				{
					this.state.initData.map(function(item){
						return  <div className='guess-list' key={item.index}>
									<Link to={
										{
											pathname:'/shopDetail',
											query:{
												id:item._id
											}
										}
									}>
										<div className='guess-shop-img'>
											<img src={item.url}/>
										</div>
										<div className='guess-shop-detail'>
											<p className='guess-active-title'>{item.name}</p>
											<p className='guess-shop-name'>{item.name}</p>
											<p className='guess-shop-price'>{item.price}</p>
										</div>
									</Link>
								</div>
					})
				}
			</div>
		)
	}
});

export default Guess;