import React from 'react';
import '../style/banner.css';
import bannerImage from "url?limit=10000!../images/banner.jpg";

let Banner = () => {
	return (
		<div className='banner-container'>
			<img src={bannerImage}/>
		</div>
	)
}

export default Banner;