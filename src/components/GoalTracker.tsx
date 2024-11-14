import React from 'react';
import { Target, CheckCircle2, Circle } from 'lucide-react';

interface Goal {
  id: number;
  text: string;
  completed: boolean;
}

export default function GoalTracker() {
  const [goals, setGoals] = React.useState<Goal[]>([
    { id: 1, text: "Meditate for 10 minutes daily", completed: false },
    { id: 2, text: "Exercise 3 times this week", completed: false },
    { id: 3, text: "Read for 30 minutes daily", completed: true },
    { id: 4, text: "Practice gratitude journaling", completed: false },
    { id: 5, text: "Learn something new today", completed: true }
  ]);

  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Your Goals</h2>
      </div>
      <div className="space-y-3">
        {goals.map(goal => (
          <div
            key={goal.id}
            className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
            onClick={() => toggleGoal(goal.id)}
          >
            {goal.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400" />
            ) : (
              <Circle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            )}
            <span className={`${
              goal.completed 
                ? 'text-gray-400 dark:text-gray-500 line-through' 
                : 'text-gray-700 dark:text-gray-200'
            }`}>
              {goal.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}