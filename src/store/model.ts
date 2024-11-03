import { action, thunk, Action, Thunk } from 'easy-peasy';
import api from '../api';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface TasksModel {
  tasks: Task[];
  input: string;
  fetchTasks: Thunk<TasksModel>;
  addTask: Thunk<TasksModel, string>;
  updateTask: Thunk<TasksModel, Task>;
  deleteTask: Thunk<TasksModel, number>;
  toggleTask: Thunk<TasksModel, number>;
  setTasks: Action<TasksModel, Task[]>;
  setInput: Action<TasksModel, string>; 
}

const tasksModel: TasksModel = {
  tasks: [],
  input: '',

  setTasks: action((state, tasks) => { // controla o estado
    state.tasks = tasks;
  }),

  setInput: action((state, input) => {
    state.input = input;
  }),

  fetchTasks: thunk(async (actions) => {
    const response = await api.get('/tasks');
    actions.setTasks(response.data); 
  }),

  // adicionar uma tarefa na API e no estado local
  addTask: thunk(async (actions, title, { getState }) => {
    const response = await api.post('/tasks', { title });
    const currentTasks = getState().tasks; // Pega as tarefas atuais
    actions.setTasks([...currentTasks, response.data]); // Atualiza o estado com a nova tarefa
  }),

  // atualiza uma tarefa na API e no estado local
  updateTask: thunk(async (actions, updatedTask, { getState }) => {
    const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
    const currentTasks = getState().tasks; 
    actions.setTasks(
      currentTasks.map(task => 
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }),

  // excluir uma tarefa na API e no estado local
  deleteTask: thunk(async (actions, taskId, { getState }) => {
    await api.delete(`/tasks/${taskId}`);
    const currentTasks = getState().tasks; 
    actions.setTasks(currentTasks.filter(task => task.id !== taskId));
  }),

  toggleTask: thunk(async (actions, taskId, { getState }) => {
    const response = await api.post(`/tasks/${taskId}`);
    const currentTasks = getState().tasks;
    actions.setTasks(
      currentTasks.map(task => 
        task.id === taskId ? {...task, done: !task.done} : task
      )
    );
  }),
};

export default tasksModel;
