import React from 'react';
import { Bar } from 'react-chartjs-2';


export default class example extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <Bar
        data={this.props.data}
        width={100}
        height={300}
        options={{

          scales: {
            yAxes: [
              {
                gridLines: {
                  drawBorder: true,
                  color: "#2B2F3B",
                  zeroLineColor: "black"
                },
                ticks: {
                  fontColor: "white",
                  fontFamily: "Gamja Flower",
                  fontSize: 10,
                  fontStyle: "bold"
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontFamily: "Gamja Flower",
                  fontSize: 12,
                  fontStyle: "bold"
                }
              }
            ]
          },
          maintainAspectRatio: false,
          responsive: true
        }}
      />
    );
  }
};