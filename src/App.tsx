import { useState } from 'react';

import CourseGoalList from './components/CourseGoalList';
import Header from './components/Header';
import goalsImage from './assets/goals.jpg';

export type CourseGoal = {
  title: string, 
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: 'Learn React',
        description: 'asdfsdaf'
      };
      return [...prevGoals, newGoals]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: 'A list of goal' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
