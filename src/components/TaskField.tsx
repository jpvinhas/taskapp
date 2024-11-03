import React from 'react';
import './styles.css';
import { useStoreState, useStoreActions} from '../store/hooks';

const TaskField: React.FC = () => {

  const input = useStoreState((state) => state.tasksModel.input);
  const setInput = useStoreActions((actions) => actions.tasksModel.setInput)

  const addTask = useStoreActions((actions) => actions.tasksModel.addTask)

  const handleAdd = (e: React.FormEvent) => {
    if(input){
      addTask(input)
    }
  }
  
  return (
    <form className='input' onSubmit={handleAdd}>
      <input
      type = "text"
      className = "inputBox"
      placeholder = "Digite nome da task"
      value={input}
      onChange = { (e) => setInput(e.target.value)}
      />

      <button type = "submit" className='submit'>Criar</button>
    </form>
  );
}

export default TaskField;
