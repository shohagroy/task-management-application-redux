import { ADDED, INITIALTASK, REMOVE } from "./actionTypes";

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

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
