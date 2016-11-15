import React from 'react';
import '../style/footer.css';
import {Link} from 'react-router';

let Footer = () => {
	return (
		<div className='footer'>
			<ul>
				<li>
					<img className='img' src='http://shop.aigegou.com/agg/wap/release/150844b/images/o2o/footer_index.png'/>
					<p className='footer-list'>首页</p>
				</li>
				<Link to='/search'>
					<li>
						<img className='img' src='http://shop.aigegou.com/agg/wap/release/150844b/images/o2o/footer_type.png'/>
						<p className='footer-list'>搜索</p>
					</li>
				</Link>
				<li>
					<img className='img' src='http://shop.aigegou.com/agg/wap/release/150844b/images/shop/ic-tab-ShoppingCart.png'/>
					<p className='footer-list'>购物车</p>
				</li>
				<Link to='/my'>
					<li>
						<img className='img' src='http://shop.aigegou.com/agg/wap/release/150844b/images/o2o/footer_my.png'/>
						<p className='footer-list'>个人中心</p>
					</li>
				</Link>
			</ul>
		</div>
	)
}

export default Footer;