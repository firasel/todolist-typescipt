import React, { ChangeEvent, FormEvent, useState } from "react";
import { data } from "../todosData";
import { Todo } from "../types";
import { AddTodo } from "./AddTodo";
import { Row } from "./Row";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");
  const todosLength = todos.length;
  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    let date = new Date();
    const uniqueNum = date.getMinutes() + date.getSeconds();
    const generateId = Math.round(Math.random() * uniqueNum);
    console.log(generateId);

    const todo = {
      id: `${generateId}`,
      task: task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  };

  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center m-auto my-8">
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />
      <div className="h-10" />
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add a todo!
        </p>
      )}
      {hasTodos && (
        <p className="text-2xl text-semibold text-gray-700 my-4">
          [{remainingTodos} of {todosLength}] todos remaining
        </p>
      )}
    </section>
  );
};
