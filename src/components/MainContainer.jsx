import React from "react";
import Todo from "./Todo";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

const MainContainer = () => {
  return (
    <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <TodoHeader />
      <hr class="mt-4" />

      {/* <!-- todo list --> */}
      <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {/* <!-- todo --> */}
        <Todo />
        <Todo />
        <Todo />
        <Todo />

        {/* <!-- todo --> */}
      </div>

      <hr class="mt-4" />

      {/* <!-- footer --> */}
      <TodoFooter />
    </div>
  );
};

export default MainContainer;
