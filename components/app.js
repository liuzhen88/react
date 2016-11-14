import React from 'react';
import {render} from 'react-dom';
import Banner from './banner';
import Classification from './Classification';
import Recommend from './recommend';
import Guess from './guess';

let App = () => {
	return (
		<div>
			<Banner/>
			<Classification/>
			<Recommend/>
			<Guess/>
		</div>
	)
};

export default App;

