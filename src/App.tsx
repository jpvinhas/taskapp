import React from 'react';
import { StoreProvider } from 'easy-peasy';
import store from './store/store';
import TaskApp from './components/TaskApp';

const App: React.FC = () => (
  <StoreProvider store={store}>
    <TaskApp />
  </StoreProvider>
);

export default App;
