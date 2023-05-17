import { ADDED, INITIALTASK, REMOVE } from "./actionTypes";
import initialState from "./initialState";

const nextTodoId = (tasks) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);

  console.log(maxId);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALTASK:
      return action.payload;

    case ADDED:
      const tasks = [
        ...state,
        {
          ...action.payload,
          id: nextTodoId(state),
        },
      ];
      localStorage.setItem("task", JSON.stringify(tasks));
      return tasks;

    case REMOVE:
      const remain = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("task", JSON.stringify(remain));
      return remain;

    default:
      return state;
  }
};

export default reducer;
