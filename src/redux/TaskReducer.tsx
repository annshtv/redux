// redux/taskReducer.js
const initialState = {
  tasks: [],
  filter: "all",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "tasks/removeTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "tasks/toggleTaskCompletion":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "tasks/setFilter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
