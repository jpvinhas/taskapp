import React, { useState } from 'react';
import { useStoreActions } from '../store/hooks';
import { Task } from '../store/model';

import { FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import { FaRegCircleCheck,FaCircleCheck  } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";



interface TaskListItemProps {
  task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const { deleteTask, updateTask } = useStoreActions((actions) => actions.tasksModel);

  const [isEditing, setIsEditing ] = useState(false)
  const [newTitle, setNewTitle ] = useState(task.title)

  const handleComplete = () => {
    updateTask({ ...task, done: !task.done });
  };

  const handleEdit = () => {
    
    if (newTitle) {
      updateTask({ ...task, title: newTitle });
    }
    
    setIsEditing(!isEditing)
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.done ? 'completed' : ''}`}>
      
      {
        isEditing
        ? <input className='task-input' type = "text" value={newTitle} onChange = { (e) => setNewTitle(e.target.value)}></input>
        :  <span className='text'>{task.title}</span>
      }
      
      <div className="task-actions">
        <button onClick={handleComplete} className='button'>
          {task.done 
          ? <FaCircleCheck className='icon'/>
          : <FaRegCircleCheck className='icon'/>
          }
        </button>
        {
          isEditing 
          ? <button onClick={handleEdit} className='button'>
              <BsFillSendFill className='icon'/>
            </button>
          : <button onClick={() => setIsEditing(!isEditing)} className='button'>
              <FaRegEdit className='icon'/>
            </button>
        }
        <button onClick={handleDelete} className='button'>
            <FaRegTrashAlt className='icon'/>
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
