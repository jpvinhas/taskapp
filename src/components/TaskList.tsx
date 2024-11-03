import React from 'react';
import { useStoreState } from '../store/hooks';
import  TaskListItem  from './TaskListItem';

const TaskList: React.FC = () => {

  const tasks = useStoreState((state) => state.tasksModel.tasks)

  return (
    <div className ='list'>
      {
        tasks.map(task => (
          <TaskListItem task = {task} key={task.id}/>
        ))
      }
    </div>
  ); 
};  

export default TaskList;