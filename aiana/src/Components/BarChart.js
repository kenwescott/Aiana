import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 240 },
  { name: 'Feb', value: 130 },
  { name: 'Mar', value: 300 },
];

function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" name="Revenue" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
