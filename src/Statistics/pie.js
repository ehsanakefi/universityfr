import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#ff0000',
		'#ffff00',
		'#3333ff'
        ],
    borderWidth: 0,
        
		hoverBackgroundColor: [
		'#cc0000',
		'#b3b300',
		'#000080'
		]
	}]
};
export default class example extends React.Component{

    
  render() {
    return (
      <div>
        <Pie height={200} data={data} />
      </div>
    );
  }
};