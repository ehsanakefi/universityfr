import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data ={
  labels: [
    'Red',
    'Green',
  ],
  datasets: [{
    data: [50, 150],
    backgroundColor: [
    '#66ff33',
    '#3333ff',
    
    ],
    borderWidth: 0,
    hoverBackgroundColor: [
    '#208000',
    '#000080',
    
    ]
  }]
};

export default class doughnut extends React.Component{

  render() {
    return (
      <div>
        <Doughnut height={200} data={data} />
      </div>
    );
  }
};