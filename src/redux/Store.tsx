
import { createStore } from 'redux';
import taskReducer from './taskReducer';

const store = createStore(
  taskReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Для использования Redux DevTools
);

export default store;
