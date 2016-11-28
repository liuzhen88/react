import React from 'react';
import '../style/footer.css';
import {Link} from 'react-router';
import index from 'url?limit=10000!../images/index.png';
import search from 'url?limit=10000!../images/search.png';
import cart from 'url?limit=10000!../images/cart.png';
import my from 'url?limit=10000!../images/my.png';

let Footer = React.createClass({
	render(){
		return (
			<div className='footer'>
				<ul>
					<li>
						<img className='img' src={index}/>
						<p className='footer-list'>首页</p>
					</li>
					<Link to='/search'>
						<li>
							<img className='img' src={search}/>
							<p className='footer-list'>搜索</p>
						</li>
					</Link>
					<Link to='/cart'>
						<li>
							<img className='img' src={cart}/>
							<p className='footer-list'>购物车</p>
						</li>
					</Link>
					<Link to='/my'>
						<li>
							<img className='img' src={my}/>
							<p className='footer-list'>个人中心</p>
						</li>
					</Link>
				</ul>
			</div>
		)
	}
}); 

export default Footer;