import React from 'react';
import back from 'url?limit=1000!../images/back.png';
import {Link} from 'react-router';

let My = React.createClass({
	render(){
		return (
			<div>
				<div className='shop-title'>我的
					<div className='back'>
						<Link to='/'>
							<img src={back} width='20px'/>
						</Link>
					</div>
				</div>
			</div>
		)
	}
});

export default My;