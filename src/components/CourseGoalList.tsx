import CourseGoal from './CourseGoal';
import { CourseGoal as CGoal } from '../App';

type CourseGoalProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
} 

export default function CourseGoalList({ goals, onDelete }: CourseGoalProps) {
  return (
  <ul>
    {goals.map(goal => (
      <li key={`${goal.id}-${goal.title}`}>
        <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
          <p>{goal.description}</p>
        </CourseGoal>
      </li>
    ))}
    </ul>
  );
}