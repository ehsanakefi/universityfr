import React from 'react';
import { Pie } from 'react-chartjs-2';

export default class example extends React.Component {

	constructor(props) {
		super(props)
	}
	render() {
		return (
		
				<Pie height={200} data={this.props.data} />
	
		);
	}
};