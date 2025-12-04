import create from 'zustand';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low'|'medium'|'high';
};

type State = {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  clearAll: () => void;
};

const useTaskStore = create<State>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  toggleTask: (id) => set((state) => ({ tasks: state.tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t) })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter(t => t.id !== id) })),
  clearAll: () => set({ tasks: [] })
}));

export default useTaskStore;
