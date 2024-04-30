import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {

  if(goals.length===0){
    return <InfoBox mode='hint'>You have no goals yet, Start adding some!</InfoBox>
  }
  
  let warning:ReactNode;

  if(goals.length === 4){
    warning = <InfoBox mode='warning' severity='medium'>Your'r collecting a lot of goals. Don't put too much on your plate!</InfoBox>
  }
  if(goals.length>=5){
    warning = <InfoBox mode='warning' severity='high'>You will not complete these much goal. Don't put more!</InfoBox>
  }
  return (
    <>
    {warning}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}
