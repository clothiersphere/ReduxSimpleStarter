import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyB_-yxPxNAssDHut65MBgyVifPmt1PcVAg';

//most parent component is responsible for fetching.




// Create a new component. This component should produce html.
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

// When you need to keep track of state - use class component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			// (data) => { this.setState({ videos: data})}
			// 	this.setState({ videos: videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
//takes 2 inputs - component and insert it into the dom element
ReactDOM.render(<App />, document.querySelector('.container'));