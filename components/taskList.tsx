'use client';
import React, { useState } from 'react';
import useTaskStore from '../store/useTaskStore';
import TaskCard from './TaskCard';

export default function TaskList() {
  const tasks = useTaskStore(state => state.tasks);
  const addTask = useTaskStore(state => state.addTask);
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({ id: Date.now().toString(), title: title.trim(), completed: false, priority: 'medium' });
    setTitle('');
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={title}
          onChange={e=>setTitle(e.target.value)}
          placeholder="New task"
          className="flex-1 p-2 border rounded"
        />
        <button onClick={handleAdd} className="px-4 py-2 bg-primary text-white rounded">Add</button>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 && <p className="text-slate-500">No tasks yet — add one!</p>}
        {tasks.map(t => <TaskCard key={t.id} task={t} />)}
      </div>
    </div>
  );
}do {
    "../";
} while (condition);

