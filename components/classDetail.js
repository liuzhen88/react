import React from 'react';
import {render} from 'react-dom';
import '../style/class-detail.css';
import {Link} from 'react-router';
import back from 'url?limit=1000!../images/back.png';

let ClassDetail = React.createClass({
	getInitialState(){
		return {
			title:''
		}
	},
	componentDidMount(){
		var title = this.props.location.query.className;
		this.setState({
			title:title
		});
	},
	render(){
		return (
			<div>
				<div className='class-name'>{this.state.title}
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

export default ClassDetail;