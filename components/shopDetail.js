import React from 'react';
import {render} from 'react-dom';
import '../style/shop-detail.css';
import back from 'url?limit=1000!../images/back.png';
import {Link} from 'react-router';
import $ from 'jquery';

const serverUrl = 'http://localhost:8000/users';

let ShopDetail = React.createClass({
	getInitialState() {
		return {
			detailData:{}
		}
	},
	componentDidMount() {
		var _this = this;
		let url = serverUrl+"/getDetail";
		let id = this.props.location.query.id;
		url = url + "?id="+ id;
		$.get(url,function(result){
			_this.setState({
				detailData:result
			});
		});
	},
	render(){
		return (
				<div>
					<div className='shop-title'>商品详情
						<div className='back'>
							<Link to='/'>
								<img src={back} width='20px'/>
							</Link>
						</div>
					</div>
					<img className='goods-detail' src={this.state.detailData.url}/>
					<div className='goods-name'>{this.state.detailData.name}</div>
					<div className='goods-info'>
						<div className='goods-info-price'>{this.state.detailData.price}</div>
						<div className='goods-info-sale-num'>已售{this.state.detailData.sale}</div>
					</div>
					<div className='fl'>返 都有利，退 过期退</div>
					<div className='jx'></div>
					<div className='buy-title'>购买须知</div>
					<div className='buy-know'>
						<h2>有效期</h2>  
						<pre>永久有效</pre>    
						<h2>使用时间</h2> 
						<pre>10:00-22：00</pre>   
						<h2>预约信息</h2> 
						<pre>无需预约</pre>   
						<h2>温馨提示</h2> 
						<pre className='pre'>
							· 预售即在线支付款项到店扫码确认订单，即可有返佣
						</pre>
						<pre className='pre'>
							· 当面付即到店付现金或刷卡，提交订单扫码确认即可有返佣
						</pre>
						<pre className='pre'>
							· 邀请好友使用自己的邀请码注册并消费也有返佣哦！
						</pre>
					</div>
				</div>
		)
	}
});

export default ShopDetail;