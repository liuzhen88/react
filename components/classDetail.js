import React from 'react';
import {render} from 'react-dom';
import '../style/class-detail.css';
import {Link} from 'react-router';
import back from 'url?limit=1000!../images/back.png';
import $ from 'jquery';
import config from './config';

const serverUrl = config.serverUrl;

let ClassDetail = React.createClass({
	getInitialState(){
		return {
			title:'',
			data:[]
		}
	},
	componentDidMount(){
		var _this = this;
		var title = this.props.location.query.className;
		let url = serverUrl+'/getClassDetail?className='+title;
		$.get(url,function(data){
			_this.setState({
				title:title,
				data:data
			});
		});
	},
	render(){
		return (
			<div>
				<div className='class-name'>{this.state.title}
					<div className='back'>
						<Link to='/'>
							<img src={back} width='20px'/>
						</Link>
					</div>
				</div>
				<div>
					{
						this.state.data.map(function(item){
							return 	<Link key={item._id} to={
										{
											pathname:'/shopDetail',
											query:{
												id:item._id
											}
										}
									}>
										<div className='search-list-containers'>
											<div className='search-list-left'>
												<img src={item.url}/>
											</div>
											<div className='search-list-right'>
												<div className='search-list-name'>{item.name}</div>
												<p className='search-list-num'>月销:{item.sale}  ， 好评:{item.comment}</p>
												<p className='search-list-price'>{item.price}</p>
											</div>
										</div>
									</Link>
						})
					}
				</div>
			</div>
		)
	}
});

export default ClassDetail;