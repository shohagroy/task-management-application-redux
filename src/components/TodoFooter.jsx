import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtered } from "../redux/tasks/actions";

const TodoFooter = ({ tasks }) => {
  const [active, setActive] = useState("all");

  const dispatch = useDispatch();

  const taskDisplayHandelar = (value) => {
    setActive(value);
  };

  useEffect(() => {
    const allTask = JSON.parse(localStorage.getItem("task"));

    if (active !== "all") {
      const filterTaks = allTask.filter((task) => task.color === active);

      dispatch(filtered(filterTaks));
    } else {
      dispatch(filtered(allTask));
    }
  }, [active, dispatch]);
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      {tasks.length ? (
        <p>{tasks.length} tasks left</p>
      ) : (
        <p>No Task Available!</p>
      )}

      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => taskDisplayHandelar("all")}
          className={`cursor-pointer ${active === "all" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => taskDisplayHandelar("yellow")}
          className={`cursor-pointer ${active === "yellow" && "font-bold"}`}
        >
          Ongoing
        </li>
        <li>|</li>
        <li
          onClick={() => taskDisplayHandelar("red")}
          className={`cursor-pointer ${active === "red" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => taskDisplayHandelar("all")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            active === "all" && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => taskDisplayHandelar("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            active === "yellow" && "bg-yellow-500"
          }`}
        ></li>
        <li
          onClick={() => taskDisplayHandelar("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
            active === "red" && "bg-red-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default TodoFooter;
