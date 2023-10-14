import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Use 'chart.js/auto' instead of 'chart.js'

const UserChart = ({ data }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance) {
      chartInstance.destroy(); // Destroy the previous chart instance if it exists
    }

    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Users',
            data: data.values,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    setChartInstance(newChartInstance); // Store the new chart instance

    // Clean up the chart when the component is unmounted
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default UserChart;
