import React from 'react';
import {render} from 'react-dom';
import '../style/class-detail.css';
import {Link} from 'react-router';

let ClassDetail = () => {
	return (
		<div>
			<div className='class-name'></div>
			<div><Link to='/'>返回首页</Link></div>
		</div>
	)
};

export default ClassDetail;