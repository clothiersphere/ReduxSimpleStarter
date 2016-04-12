import React from 'react';
import VideoListItem from './video_list_item';


//props is being passed videos from index.js 
//<VideoList videos={this.state.videos} />

//prop from app into video list item
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		)
	});
	
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;