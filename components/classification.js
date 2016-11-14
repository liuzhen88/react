import React from 'react';
import '../style/class.css';
import {Link} from 'react-router';
let Classification = () => {
	return (
		<div>
			<ul id='class-ul'>
				<li>
					<Link to="/class?index=0">
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>美食</p>
				</li>
				<li>
					<Link to='/class'>
						<img src='http://img.aigegou.com/mobile/category/05169655736122324.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>丽人</p>
				</li>
				<li>
					<Link to='/class'>
						<img src='http://img.aigegou.com/mobile/category/05169655639112140.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>酒店</p>
				</li>
				<li>
					<Link to='/class'>
						<img src='http://img.aigegou.com/mobile/category/05169666276604348.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>结婚</p>
				</li>
				<li>
					<Link to='/class'>
						<img src='http://img.aigegou.com/mobile/category/05169655513261242.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>休闲娱乐</p>
				</li>
				<li>
					<Link to='/class'>
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>同城配送</p>
				</li>
				<li>
					<Link to='/class'>
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>商城</p>
				</li>
				<li>
					<Link to='/class'>
						<img src='http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png'/>
					</Link>
					<p>健翔生态</p>
				</li>
			</ul>
			<div className='bg'></div>
		</div>
	)
};

export default Classification;