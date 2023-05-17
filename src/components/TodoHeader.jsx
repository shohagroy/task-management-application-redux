import Nodes from "../assets/notes.png";
import Dubble_tick from "../assets/double-tick.png";
import Plus from "../assets/plus.png";
import { useDispatch } from "react-redux";
import { added, allComplited, clearComplited } from "../redux/tasks/actions";
import { useState } from "react";

const TodoHeader = () => {
  const [newTask, setNewTask] = useState({
    text: "",
    completed: false,
    color: "green",
  });

  const dispatch = useDispatch();

  const addNewTaskHandelar = (e) => {
    e.preventDefault();

    setNewTask({
      text: "",
      completed: false,
      color: "green",
    });
    dispatch(added(newTask));
  };

  const allTaskComplitedHandelar = () => {
    dispatch(allComplited());
  };

  const clearAllCompliteTask = () => {
    dispatch(clearComplited());
  };
  return (
    <div>
      <form
        onSubmit={addNewTaskHandelar}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={Nodes} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
          type="text"
          value={newTask.text}
          placeholder="Type your task..."
          name="task"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button type="submit" className={`appearance-none w-8 h-8 bg-contain`}>
          <img src={Plus} alt="plus" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={allTaskComplitedHandelar}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={Dubble_tick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearAllCompliteTask} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default TodoHeader;
