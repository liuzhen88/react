import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import config from './config';
import cookie from './cookie';
import back from 'url?limit=1000!../images/back.png';
// import store from '../store/store';
// import actions from '../actions/action';
const serverUrl = config.serverUrl;

let Cart = React.createClass({
	getInitialState() {
		return {
			shopCartData:[]
		}	
	},
	componentDidMount() {
		let _this = this;
		let interfaceUrl = serverUrl + '/getShopCartData?key='+cookie.getcookie('key');
		fetch(interfaceUrl)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			if(data.code == '200'){
				var data = data.data.cart;
				_this.setState({
					shopCartData:data
				});
			}else if(data.code == '80001'){
				window.location.href = '/login';
			}else{
				alert(data.message);
			}
		});
	},
	render(){
		return (
			<div>
				<div className='shop-title'>购物车
					<div className='back'>
						<Link to='/'>
							<img src={back} width='20px'/>
						</Link>
					</div>
				</div>
				<div>
					{
						this.state.shopCartData.map(function(item){
							return  <Link to={
								{
									pathname:'/shopDetail',
									query:{
										id:item.shop_goods_id
									}
								}
							} key={item._id}>
										<div className='search-list-container'>
											<div className='search-list-left'>
												<img src={item.url}/>
											</div>
											<div className='search-list-right'>
												<div className='search-list-name'>{item.name}</div>
												<p className='search-list-num'>月销: {item.sale}</p>
												<p className='search-list-price'>{item.price}</p>
											</div>
										</div>
									</Link>
						})
					}
				</div>
				<div className='null'></div>
				<div className='go-to-pay'>去支付</div>
			</div>
		)
	}
});

export default Cart;