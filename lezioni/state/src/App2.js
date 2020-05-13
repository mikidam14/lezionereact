import React from 'react';

class App2 extends React.Component {
	constructor() {
		super();
		this.state = {
			age: 20
		};
		this.increaseAge = this.increaseAge.bind(this);
	}

	//bind
	increaseAge(){
		this.setState({age: this.state.age + 1});
	}

	render() {
		return (
			<div>
				<h1>Esempio di state</h1>
				<p>Io mi chiamo Jim e ho {this.state.age} anni.</p>
				<button onClick={this.increaseAge}>Invecchia!</button>
			</div>
		)
	}
}

export default App2;