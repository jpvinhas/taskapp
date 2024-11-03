import React from 'react';
import { useStoreActions } from '../store/hooks';
import { Task } from '../store/model';

import { FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import { FaRegCircleCheck,FaCircleCheck  } from "react-icons/fa6";


interface TaskListItemProps {
  task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const { deleteTask, updateTask } = useStoreActions((actions) => actions.tasksModel);

  const handleComplete = () => {
    updateTask({ ...task, done: !task.done });
  };

  const handleEdit = () => {
    const newTitle = prompt("Editar tarefa:", task.title);
    if (newTitle) {
      updateTask({ ...task, title: newTitle });
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.done ? 'completed' : ''}`}>
      <span className='text'>{task.title}</span>
      <div className="task-actions">
        <button onClick={handleComplete} className='button'>
          {task.done 
          ? <FaCircleCheck className='icon'/>
          : <FaRegCircleCheck className='icon'/>
          }
        </button>
        <button onClick={handleEdit} className='button'>
            <FaRegEdit className='icon'/>
        </button>
        <button onClick={handleDelete} className='button'>
            <FaRegTrashAlt className='icon'/>
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
