import { ADDED, INITIALTASK } from "./actionTypes";

export const initial = (tasks) => {
  return {
    type: INITIALTASK,
    payload: tasks,
  };
};

export const added = (task) => {
  return {
    type: ADDED,
    payload: task,
  };
};
