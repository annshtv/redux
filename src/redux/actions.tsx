
export const addTask = (task) => ({
    type: 'tasks/addTask',
    payload: task,
  });
  
  export const removeTask = (taskId) => ({
    type: 'tasks/removeTask',
    payload: taskId,
  });
  
  export const toggleTaskCompletion = (taskId) => ({
    type: 'tasks/toggleTaskCompletion',
    payload: taskId,
  });
  
  export const setFilter = (filter) => ({
    type: 'tasks/setFilter',
    payload: filter,
  });
  