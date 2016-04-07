import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB_-yxPxNAssDHut65MBgyVifPmt1PcVAg';

// Create a new component. This component should produce html.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put it on the page (in the DOM)
//takes 2 inputs - component and insert it into the dom element
ReactDOM.render(<App />, document.querySelector('.container'));