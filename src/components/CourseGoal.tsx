import { ReactNode } from 'react';

type CourseGoalProps = {
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>

export default function CourseGoal({ title, children, onDelete, id }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => {onDelete(id)}}>Delete</button>
    </article>
  );
}