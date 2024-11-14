import React from 'react';
import { SunMedium } from 'lucide-react';

const affirmations = [
  "I am capable of achieving greatness",
  "Every day, I'm growing stronger and wiser",
  "I trust in my journey and embrace the process",
  "I have the power to create positive change",
  "My potential is limitless",
  "I turn challenges into opportunities",
  "I am focused and productive",
  "My actions create my future"
];

export default function DailyAffirmation() {
  const [affirmation, setAffirmation] = React.useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );

  const newAffirmation = () => {
    let next = affirmation;
    while (next === affirmation) {
      next = affirmations[Math.floor(Math.random() * affirmations.length)];
    }
    setAffirmation(next);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-xl p-6 text-white shadow-lg animate-gradient">
      <div className="flex items-center gap-2 mb-4">
        <SunMedium className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Daily Affirmation</h2>
      </div>
      <p className="text-lg font-medium mb-4">{affirmation}</p>
      <button
        onClick={newAffirmation}
        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
      >
        New Affirmation
      </button>
    </div>
  );
}