import { useState } from 'react';

import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImage from './assets/goals.jpg';

type CourseGoal = {
  title: string, 
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals();
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: 'A list of goal' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="Learn React">
        hihihi
      </CourseGoal>
    </main>
  );
}
