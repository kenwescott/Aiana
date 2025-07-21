import React, { useState } from 'react';
import { BarChart,Rectangle, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

import { useTranslation } from 'react-i18next';

const elephantData = [
  { name: 'Kenya', value: 130432 },
  { name: 'China', value: 106069 },
  { name: 'Hong Kong', value: 75707 },
  { name: 'Vietnam', value: 71256 },
  { name: 'Singapore', value: 29882 },
  { name: 'Mozambique', value:24972 },
  { name: 'Nigeria', value: 23031 },
];
const rhinoData = [
  { name: 'South Africa', value: 3749 },
  { name: 'China', value: 1718 },
  { name: 'Vietnam', value: 1339 },
  { name: 'Kenya', value: 1230 },
  { name: 'Mozambique', value: 632 },
  { name: 'Hong Kong', value: 479 },
  { name: 'Namibia', value: 391 },
];

function BarChartComponent() {
    const { t } = useTranslation();
  const [chartType, setChartType] = useState('elephant');

  const data = chartType === 'elephant' ? elephantData : rhinoData;
  const maxValue = Math.max(...data.map(entry => entry.value));

  return (
    <div>
      {/* Title */}
      <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {chartType === 'elephant'
          ? t('chart.elephantTitle')
          : t('chart.rhinoTitle')}
      </h4>

      {/* Chart Toggle Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button
          className={`btn btn-outline-secondary me-2 ${chartType === 'elephant' ? 'active' : ''}`}
          onClick={() => setChartType('elephant')}
        >
          {t('chart.elephantButton')}
        </button>
        <button
          className={`btn btn-outline-secondary ${chartType === 'rhino' ? 'active' : ''}`}
          onClick={() => setChartType('rhino')}
        >
          {t('chart.rhinoButton')}
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name={chartType === 'elephant' ? t('chart.ivoryLegend') : t('chart.rhinoLegend')}
          activeBar={<Rectangle fill="#FF8C00"  />}>

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value === maxValue ? '#d9534f' : '#D57E2A'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


export default BarChartComponent;
