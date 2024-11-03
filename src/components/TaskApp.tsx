import React, { useEffect } from 'react';
import TaskField from './TaskField';
import TaskList from './TaskList';
import { useStoreActions } from '../store/hooks';

const TaskApp: React.FC = () => {

    const fetchTasks = useStoreActions((actions) => actions.tasksModel.fetchTasks);
  
    useEffect(() => {
      fetchTasks(); 
    }, [fetchTasks]);

    return (
        <div className='app'>
            <header className='header'>
                ToDo
            </header>
            <TaskField/>
            <TaskList/>
        </div>
    ); 
};

export default TaskApp;