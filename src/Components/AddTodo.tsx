import { AddTodoProps } from "../types";

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
    <input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 border-2 border-green-600 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <button
      className="bg-green-600 hover:bg-green-700 transition-all duration-300 p-2 text-white rounded-md text-xl font-semibold"
      type="submit"
      aria-label="Add todo"
    >
      ADD
    </button>
  </form>
);
