


import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Use 'chart.js/auto' instead of 'chart.js'

const UserChart = ({ data }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance) {
      chartInstance.destroy(); 
    }

    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'sold',
            data: data.values[0],
            borderColor: '#008000',
            borderWidth: 2,
            tension:0.2,
            fill:true,
            backgroundColor:"#00800047",

          },
          {
            label: 'returned',
            data: data.values[1],
            borderColor: '#ff0000',
            borderWidth: 2,
            tension:0.2,
            fill:true,
            backgroundColor:"#ff000047", 
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,//if you wanna make this fixed width do true
        plugins:
        {tooltip: {
          // Customize the tooltip appearance
          backgroundColor: '#ffffffe3',
          titleColor:"black",
          bodyColor:"black",
          borderColor: '#000000',
          borderWidth: 1,
          titleFontColor: 'black',
          bodyFontColor: '#000000',

          callbacks: {
            label: (tooltipItem) => {
              const datasetLabel = tooltipItem.dataset.label;
              const label = tooltipItem.label;
              const value = tooltipItem.parsed.y;
              return `${value} products has been ${datasetLabel} in ${label}`;
            },
          },
        },}
      },
    });

    setChartInstance(newChartInstance); 

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [data,]);

  return <canvas ref={chartRef} />;
};

export default UserChart;