import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function ProgressChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Weekly Progress</h2>
      </div>
      <div className="h-40 flex items-end gap-2">
        {[60, 45, 75, 50, 80, 65, 90].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-1 group">
            <div 
              className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 dark:from-indigo-600 dark:to-indigo-500 rounded-t-md transition-all duration-500 relative"
              style={{ height: `${height}%` }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {height}%
              </div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}