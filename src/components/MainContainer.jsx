import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initial } from "../redux/tasks/actions";
import Todo from "./Todo";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

const MainContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const remainTaks = JSON.parse(localStorage.getItem("task")) || [];
    dispatch(initial(remainTaks));
  }, [dispatch]);

  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-2 lg:p-6 bg-white">
      <TodoHeader />
      <hr className="mt-4" />

      {/* <!-- todo list --> */}
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {/* <!-- todo --> */}
        {tasks
          .sort((a, b) => a.id - b.id)
          .map((task, i) => (
            <Todo key={task.id} task={task} serial={i} />
          ))}

        {/* <!-- todo --> */}
      </div>

      <hr className="mt-4" />

      {/* <!-- footer --> */}
      <TodoFooter tasks={tasks} />
    </div>
  );
};

export default MainContainer;
