import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(181,230,29,1)',
      borderColor: 'rgba(51, 102, 0,1)',
      borderWidth: 1,
 
      hoverBackgroundColor: 'rgba(181,230,29,0.8)',
      hoverBorderColor: 'rgba(51, 102, 0,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
export default class example extends React.Component{

    render() {
        return (
          <div>
            <Bar
             data={data}
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
              }}
            />
          </div>
        );
      }
};