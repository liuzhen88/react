import React from 'react';
import back from 'url?limit=1000!../images/back.png';
import weixin from 'url?limit=1000!../images/wx.png';
import zfb from 'url?limit=1000!../images/zfb.png';
import no from 'url?limit=1000!../images/no.png';
import yes from 'url?limit=1000!../images/yes.png';
import '../style/pay.css';
import config from './config';

let Pay = React.createClass({
	goBack(){
		history.back();
	},
	addNum(){
		let num = this.state.num;
		let pay = this.state.price.toString().split('￥')[1];
		num ++;
		let orderPay = "￥" + (Number(num) * Number(pay));
		let needPay = orderPay;
		this.setState({
			num:num,
			orderPay:orderPay,
			needPay:needPay
		});
	},
	reduceNum(){
		let num = this.state.num;
		if(num == 1){
			alert('物品数量须大于1');
		}else{	
			let pay = this.state.price.toString().split('￥')[1];
			num --;
			let orderPay = "￥" + (Number(num) * Number(pay));
			let needPay = orderPay;
			this.setState({
				num:num,
				orderPay:orderPay,
				needPay:needPay
			});
		}
	},
	handleWeixin(){
		let state = 0;
		this.setState({
			state:state
		});
	},
	handleMoney(){
		let state = 1;
		this.setState({
			state:state
		});
	},
	getInitialState() {
		return {
			state:0,
			num:1,
			orderPay:0,
			needPay:0,
			price:'￥0',
			url:'',
			name:'',
			sale:''
		}	
	},
	componentDidMount() {
		let _this = this;
		let id = this.props.location.query.id;
		let url = config.serverUrl + '/getPayOrderDataById?id='+id;
		fetch(url)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			_this.setState({
				orderPay:data.price,
				needPay:data.price,
				price:data.price,
				sale:data.sale,
				url:data.url,
				name:data.name
			});
		});
	},
	render(){
		return (
			<div>
				<div className='shop-title'>支付
					<div className='back' onClick={this.goBack}>
						<img src={back} width='20px'/>
					</div>
				</div>
				<div className='pay-shop-container'>
					<div className='pay-shop-img'>
						<img src={this.state.url}/>
					</div>
					<div className='pay-shop-info-container'>
						<div className='pay-shop-name'>
							{this.state.name}
						</div>
						<div className='pay-shop-price'>
							{this.state.price}
						</div>
						<div className='pay-shop-sale'>已售: {this.state.sale}</div>
					</div>
				</div>
				<div className='jx'></div>
				<div className='pay-shop-action'>
					<div className='pay-shop-num'>数量 :</div>
					<div className='pay-shop-action-container'>
						<span className='common-pay-shop reduce' onClick={this.reduceNum}>-</span>
						<span className='shop-num'>{this.state.num}</span>
						<span className='common-pay-shop add' onClick={this.addNum}>+</span>
					</div>
				</div>
				<div className='jx'></div>
				<div className='pay-type-container'>
					<div className='pay-type-weixin' onClick={this.handleWeixin}>
						<img src={weixin}/>
						<div className='pay-type-name'>微信钱包</div>
						<div className='pay-type-state'>
							<img src={this.state.state == 0 ? yes:no}/>
						</div>
					</div>
					<div className='pay-type-weixin' onClick={this.handleMoney}>
						<img src={zfb}/>
						<div className='pay-type-name'>支付宝</div>
						<div className='pay-type-state'>
							<img src={this.state.state == 1 ? yes:no}/>
						</div>
					</div>
				</div>
				<div className='jx'></div>
				<div className='pay-order'>
					<div className='pay-order-title'>订单结算</div>
					<div className='pay-order-list'>
						<div className='pay-order-list-name'>订单金额</div>
						<div className='pay-order-list-value'>{this.state.orderPay}</div>
					</div>
					<div className='pay-order-list'>
						<div className='pay-order-list-name'>应付金额</div>
						<div className='pay-order-list-value'>{this.state.needPay}</div>
					</div>
					<div className='pay-order-list'>
						<div className='pay-order-list-name'>优惠折扣</div>
						<div className='pay-order-list-value red'>￥0.00</div>
					</div>
				</div>
				<div className='jxx'></div>
				<div className='pay-shop-bottom'>
					<span>实际还需支付 : </span>
					<span className='red'>{this.state.needPay}</span>
					<a className='pay-to-money'>去支付</a>
				</div>
			</div>
		)
	}
});

export default Pay;