import React from 'react';
import useTaskStore fromstore/useTaskStore';

// Define the Task type (should ideally be in a shared types file)
type Task = { 
  id: string; 
  title: string; 
  completed: boolean; 
  priority: 'low' | 'medium' | 'high' 
};

// Define the store's state shape
type TaskStore = {
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
};

export default function TaskCard({ task }: { task: Task }) {
  const toggle = useTaskStore((state: TaskStore) => state.toggleTask);
  const remove = useTaskStore((state: TaskStore) => state.removeTask);

  return (
    <div className="p-3 bg-white rounded shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggle(task.id)} 
        />
        <div>
          <p className={task.completed ? 'line-through text-slate-400' : ''}>
            {task.title}
          </p>
          <small className="text-xs text-slate-500">{task.priority}</small>
        </div>
      </div>

      <button 
        onClick={() => remove(task.id)} 
        className="text-sm text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}