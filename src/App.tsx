import React, { useState } from 'react';
import Navigation from './components/Navigation';
import GoalTracker from './components/GoalTracker';
import DailyAffirmation from './components/DailyAffirmation';
import ProgressChart from './components/ProgressChart';
import KanbanBoard from './components/KanbanBoard';
import Analytics from './components/Analytics';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const renderView = () => {
    switch (currentView) {
      case 'kanban':
        return <KanbanBoard />;
      case 'analytics':
        return <Analytics />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {/* Welcome Message */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back!
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Your journey to personal growth continues. Let's make today count.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <DailyAffirmation />
            </div>
            
            <div className="space-y-6">
              <GoalTracker />
            </div>
            
            <div className="space-y-6">
              <ProgressChart />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navigation
        currentView={currentView}
        setCurrentView={setCurrentView}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="max-w-7xl mx-auto">
        {renderView()}
      </main>
    </div>
  );
}

export default App;