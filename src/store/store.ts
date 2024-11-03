import { createStore } from 'easy-peasy';
import tasksModel, { TasksModel } from './model';

export interface StoreModel {
  tasksModel: TasksModel;
}

const store = createStore<StoreModel>({
  tasksModel,
});

export default store;
