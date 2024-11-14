import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import './ExploreAITech.css';

function ExploreAITech() {
  // Sample data for demonstration purposes
  const barData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Before Optimization (kg)',
        data: [30, 20, 25, 15],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'After Optimization (kg)',
        data: [20, 12, 18, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Optimized', 'Not Optimized'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ['#4DA1E0', '#F0B700'],
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue Saved ($)',
        data: [500, 700, 800, 600, 900, 1000],
        borderColor: '#6EC207',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Additional optimization data
  const optimizationMetrics = [
    { label: 'Average Weight Reduction', value: '25%' },
    { label: 'Packaging Cost Savings', value: '$5,000' },
    { label: 'Environmental Impact Score', value: '8.5/10' },
  ];

  return (
    <div className="explore-ai-container">
      <h1 className="statistics-heading">Statistics on Packaging Optimization</h1>
      <p className="statistics-description">
        Visual insights on packaging waste, optimization, and revenue savings:
      </p>

      <div className="chart-section">
        <div className="chart-group">
          <h3>Packaging Waste Analysis</h3>
          <Bar data={barData} />
        </div>

        <div className="chart-group">
          <h3>Optimization Overview</h3>
          <Pie data={pieData} />
        </div>

        <div className="chart-group">
          <h3>Revenue Savings Over Time</h3>
          <Line data={lineData} />
        </div>
      </div>

      {/* Optimization Metrics Section */}
      <div className="optimization-metrics">
        <h2>Further Optimization Insights</h2>
        <ul>
          {optimizationMetrics.map((metric, index) => (
            <li key={index}>
              <strong>{metric.label}:</strong> {metric.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExploreAITech;
