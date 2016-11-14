import React from 'react';
import '../style/class.css';
import {Link} from 'react-router';
let Classification = () => {
	return (
		<div>
			<ul id='class-ul'>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'美食'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>美食</p>
				</li>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'丽人'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169655736122324.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>丽人</p>
				</li>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'酒店'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169655639112140.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>酒店</p>
				</li>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'结婚'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169666276604348.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>结婚</p>
				</li>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'休闲娱乐'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169655513261242.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>休闲娱乐</p>
				</li>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'同城配送'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>同城配送</p>
				</li>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'商城'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>商城</p>
				</li>
				<li>
					<Link to={
						{
							pathname:'/class',
							query:{
								className:'健翔生态'
							}
						}
					}>
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p className='class-content'>健翔生态</p>
				</li>
			</ul>
			<div className='bg'></div>
		</div>
	)
};

export default Classification;