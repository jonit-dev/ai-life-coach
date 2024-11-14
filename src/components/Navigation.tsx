import React from 'react';
import { Brain, LayoutDashboard, Trello, Moon, Sun, BarChart2 } from 'lucide-react';

interface NavProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ currentView, setCurrentView, darkMode, toggleDarkMode }: NavProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MindfulMe</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`p-2 rounded-lg transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentView('kanban')}
                className={`p-2 rounded-lg transition-colors ${
                  currentView === 'kanban'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Trello className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentView('analytics')}
                className={`p-2 rounded-lg transition-colors ${
                  currentView === 'analytics'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <BarChart2 className="w-5 h-5" />
              </button>
            </nav>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}