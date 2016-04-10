import React, { Component } from 'react';
// import React from 'react';
// class SearchBar extends React.Component {

//functional component
// const SearchBar = () => {
// 	return <input type="text"/>;
// };

//we change this from functional component to class based so it can track itself

//define a new class called SearchBar and give it all the 
// functionality of all React.Component class
//this doesnt need to be React.Component because we've signifed in our import
class SearchBar extends Component {	
	//constructor called automaticlaly when a new instance is created
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		)	
		// return <input onChange={(event) => console.log(event.target.value)} />;
	// 	return <input onChange={this.onInputChange} />;
	}
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

export default SearchBar;
