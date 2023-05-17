import { ADDED, INITIALTASK, REMOVE, TOGGLED } from "./actionTypes";

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

export const updated = (value) => {
  return {
    type: TOGGLED,
    payload: value,
  };
};
