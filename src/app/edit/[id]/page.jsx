import Todo from "@/app/models/Todo";
import React from "react";
import { redirect } from "next/navigation";
const Edit = async ({ params }) => {
  //   console.log(params);
  //   const allTodos = await Todo.find();

  const todo = await Todo.findOne({ _id: params.id });

  const updateTodo = async (e) => {
    "use server";
    let title = e.get("title")?.valueOf();
    let todo = e.get("todo")?.valueOf();

    await Todo.findByIdAndUpdate(params.id, {
      title,
      todo,
    });
    redirect("/");
  };

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Update Note</h1>
      <form action={updateTodo}>
        <div>
          <label className="text-lg ">Title</label>
          <br />
          <input
            type="text"
            name="title"
            className="w-[100%] md:w-[50%] bg-slate-200 h-10 p-3"
            defaultValue={todo.title}
          />
        </div>
        <div>
          <label>Todo</label>
          <br />
          <textarea
            type="text"
            defaultValue={todo.todo}
            name="todo"
            rows="3"
            className="w-[100%] md:w-[50%] bg-slate-200 p-3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-3 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white"
        >
          ReSubmit
        </button>
      </form>
    </main>
  );
};

export default Edit;
