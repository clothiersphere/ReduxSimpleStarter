import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
// this.setState({ videos: videos }); is the same as (data) => { this.setState({ videos: data})} 
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [], 
			selectedVideo: null
		};
		
		this.videoSearch('muy thai');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	// <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
//takes 2 inputs - component and insert it into the dom element
ReactDOM.render(<App />, document.querySelector('.container'));