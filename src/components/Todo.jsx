import React from "react";
import { useDispatch } from "react-redux";
import Cancel from "../assets/cancel.png";
import { remove, updated } from "../redux/tasks/actions";

const Todo = ({ task, serial }) => {
  const { id, text, color } = task || {};

  const dispatch = useDispatch();

  const taskRemoveHandelar = (id) => {
    dispatch(remove(id));
  };

  const taskUpdateHandelar = (value) => {
    dispatch(updated(value));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <p>{serial + 1}.</p>

      <div className="select-none flex-1 capitalize">{text}</div>

      <div
        onClick={() => taskUpdateHandelar({ id, color: "green" })}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "bg-green-500"
        } `}
      ></div>

      <div
        onClick={() => taskUpdateHandelar({ id, color: "yellow" })}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        } `}
      ></div>

      <div
        onClick={() => taskUpdateHandelar({ id, color: "red" })}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500  ${
          color === "red" && "bg-red-500"
        } `}
      ></div>

      <button onClick={() => taskRemoveHandelar(id)}>
        <img
          src={Cancel}
          className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
          alt="Cancel"
        />
      </button>
    </div>
  );
};

export default Todo;
