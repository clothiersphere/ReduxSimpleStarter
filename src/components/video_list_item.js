import React from 'react';

//es6 notation 
// const VideoListItem = (props) => {
	// const video = props.video
	// const onVideoSelect = props.onVideoSelect

// implies argument has a property mamed video
// const VideoListItem = ({video}) => {


const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;



