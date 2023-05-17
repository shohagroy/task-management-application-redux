import { ADDED, FILTERED, INITIALTASK, REMOVE, TOGGLED } from "./actionTypes";
import initialState from "./initialState";

const nextTodoId = (tasks) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);

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

    case TOGGLED:
      const updatedTask = {
        ...state.find((task) => task.id === action.payload.id),
        color: action.payload.color,
      };

      // const index = state.findIndex((task) => task.id === action.payload.id);
      // state[index] = updatedTask;

      const remainTask = state.filter((task) => task.id !== action.payload.id);
      localStorage.setItem(
        "task",
        JSON.stringify([...remainTask, updatedTask])
      );
      return [...remainTask, updatedTask];

    case FILTERED:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
