import React from 'react';
import { Doughnut } from 'react-chartjs-2';


export default class doughnut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {



    return (
      <div>
        <Doughnut options={{

          maintainAspectRatio: true,
          responsive: true,
          cutoutPercentage: 50
        }} data={this.props.data} />
      </div>
    );
  }
};