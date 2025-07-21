import React from 'react';
import { useTranslation } from 'react-i18next';

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,CartesianGrid } from 'recharts';

const data = [
  { name: '2000', value: 12 },
  { name: '2001', value: 9 },
  { name: '2002', value: 25 },
  { name: '2003', value: 22 },
  { name: '2004', value: 10 },
  { name: '2005', value: 11 },
  { name: '2006', value: 36 },
  { name: '2007', value: 13 },
  { name: '2008', value: 83 },
  { name: '2009', value: 122 },
  { name: '2010', value: 333 },
  { name: '2011', value: 448 },
  { name: '2012', value: 668 },
  { name: '2013', value: 1004 },
  { name: '2014', value: 1215 },
  { name: '2015', value: 1175 },
  { name: '2016', value: 1054 },
  { name: '2017', value: 1028 },
  { name: '2018', value: 769 },
  { name: '2019', value: 594 },
  { name: '2020', value: 394 },
  { name: '2021', value: 451 },
];

function LineChartComponent() {
    const { t } = useTranslation();

  return (
    <div>
      {/* Title */}
      <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>
       {t('rhinoPoachingTrends')} 
      </h4>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}
      margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
         <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#d9534f" name={t('rhinoPoaching')} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
