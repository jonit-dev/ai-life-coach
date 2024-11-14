import React, { useState } from 'react';
import { 
  Activity, 
  Brain, 
  Target, 
  Clock,
  Zap,
  Trophy,
  Calendar,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function Analytics() {
  const [timeframe, setTimeframe] = useState<'week' | 'month'>('week');
  const [currentPeriod, setCurrentPeriod] = useState(0);

  const stats = [
    { icon: Activity, label: 'Focus Score', value: '85%', change: '+5%' },
    { icon: Brain, label: 'Mindfulness', value: '92%', change: '+12%' },
    { icon: Target, label: 'Goals Met', value: '16/20', change: '+3' },
    { icon: Clock, label: 'Avg. Session', value: '45m', change: '+10m' },
    { icon: Zap, label: 'Productivity', value: '78%', change: '+8%' },
    { icon: Trophy, label: 'Streak', value: '12 days', change: '+2' }
  ];

  const weeklyData = [65, 70, 85, 75, 90, 85, 95];
  const monthlyData = [
    60, 65, 70, 75, 80, 85, 90, 85, 80, 75, 70, 75,
    80, 85, 90, 85, 80, 75, 70, 65, 70, 75, 80, 85,
    90, 95, 90, 85, 80, 85, 90
  ];

  const currentData = timeframe === 'week' ? weeklyData : monthlyData;
  const labels = timeframe === 'week' 
    ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    : Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map(({ icon: Icon, label, value, change }) => (
          <div key={label} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{label}</h3>
              </div>
              <span className="text-sm text-green-600 dark:text-green-400">{change}</span>
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Progress Overview</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTimeframe('week')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  timeframe === 'week'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeframe('month')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  timeframe === 'month'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Month
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPeriod(prev => prev - 1)}
                className="p-1 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPeriod(prev => prev + 1)}
                className="p-1 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-64 flex items-end gap-2">
          {currentData.map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 dark:from-indigo-600 dark:to-indigo-500 rounded-t-md transition-all duration-500 relative group"
                style={{ height: `${height}%` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {height}%
                </div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {labels[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}