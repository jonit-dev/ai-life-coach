import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: '1', title: 'Morning Meditation', description: 'Start with 10 minutes', createdAt: new Date() },
        { id: '2', title: 'Read Book', description: 'Chapter 3 of Atomic Habits', createdAt: new Date() }
      ]
    },
    {
      id: 'inProgress',
      title: 'In Progress',
      tasks: [
        { id: '3', title: 'Exercise Routine', description: '30 minutes cardio', createdAt: new Date() }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: '4', title: 'Journal Entry', description: 'Daily reflection complete', createdAt: new Date() }
      ]
    }
  ]);

  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (columnId: string) => {
    if (!draggedTask) return;

    const newColumns = columns.map(col => ({
      ...col,
      tasks: col.id === columnId
        ? [...col.tasks, draggedTask]
        : col.tasks.filter(task => task.id !== draggedTask.id)
    }));

    setColumns(newColumns);
    setDraggedTask(null);
  };

  const addTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      createdAt: new Date()
    };

    setColumns(columns.map(col => 
      col.id === 'todo' 
        ? { ...col, tasks: [task, ...col.tasks] }
        : col
    ));

    setNewTask({ title: '', description: '' });
    setIsAdding(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        {!isAdding ? (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Task
          </button>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">New Task</h3>
              <button
                onClick={() => setIsAdding(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
              rows={3}
            />
            <button
              onClick={addTask}
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Create Task
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div
            key={column.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {column.title}
              </h3>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
                {column.tasks.length}
              </span>
            </div>
            <div className="space-y-3">
              {column.tasks.map(task => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => handleDragStart(task)}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm cursor-move hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                    {task.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {task.description}
                  </p>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    Added {task.createdAt.toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}