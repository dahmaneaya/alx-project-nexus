import TaskList from '../../components/TaskList';
import Analytics from '../../components/Analytics';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 px-6 py-8">
        <aside className="md:col-span-1">
          <Sidebar />
        </aside>

        <main className="md:col-span-4">
          <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
          <TaskList />
        </main>

        <aside className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
          <Analytics />
        </aside>
      </div>
    </div>
  );
}
