'use client';
import React from 'react';
import useTaskStore from '../store/useTaskStore';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function Analytics() {
  const tasks = useTaskStore(s => s.tasks);
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const data = [
    { name: 'Completed', value: completed },
    { name: 'Remaining', value: Math.max(total - completed, 0) }
  ];

  return (
    <div className="bg-white rounded p-4 shadow">
      <h3 className="font-medium">Completion</h3>
      <div className="mt-4 flex items-center justify-center">
        <PieChart width={180} height={180}>
          <Pie data={data} dataKey="value" innerRadius={40} outerRadius={70}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index===0 ? '#06B6D4' : '#CBD5E1'} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <p className="mt-3 text-sm text-slate-600 text-center">{completed} / {total} completed</p>
    </div>
  );
}
