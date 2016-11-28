import React from 'react';
import back from 'url?limit=1000!../images/back.png';
let Pay = React.createClass({
	render(){
		return (
			<div>
				<div className='shop-title'>支付
					<div className='back' onClick={this.goBack}>
						<img src={back} width='20px'/>
					</div>
				</div>
			</div>
		)
	}
});

export default Pay;