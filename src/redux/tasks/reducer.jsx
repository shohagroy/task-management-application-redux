import { ADDED, INITIALTASK } from "./actionTypes";
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
      const remain = [
        ...state,
        {
          ...action.payload,
          id: nextTodoId(state),
        },
      ];
      localStorage.setItem("task", JSON.stringify(remain));

      return remain;

    default:
      return state;
  }
};

export default reducer;
