import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const data = [
  {
    name: 'Deaths',
    value: 73,
    fill: '#d9534f', // red
  },
];

const AnimalDeathRate = () => {
  return (
    <div className="d-flex align-items-center p-4 shadow rounded bg-white">
      {/* Chart Section */}
      <div>
        <RadialBarChart
          width={150}
          height={150}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={70}
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar
            background
            clockWise
            dataKey="value"
            cornerRadius={5}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: '28px', fontWeight: 'bold' }}
          >
            {data[0].value}%
          </text>
        </RadialBarChart>
      </div>

      {/* Caption Section */}
      <div className="ms-4">
        <p className="mb-0 text-muted" style={{ fontSize: '14px', maxWidth: '220px' }}>
          decline in the average size of global wildlife populations in just 50 years
        </p>
      </div>
    </div>
  );
};

export default AnimalDeathRate;
