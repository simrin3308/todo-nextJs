
import { redirect } from "next/navigation";
import connectDb from "./connectDb";
import Todo from "./models/Todo"
import Link from "next/link";
const Home = async () => {

  const allTodos = await Todo.find()

  // create todo
  const createTodo = async (e) => {
    "use server"

    let title = e.get("title")?.valueOf()
    let todo = e.get("todo")?.valueOf()

    try {
      connectDb()
      const newTodo = new Todo({ title, todo })
      await newTodo.save()
      console.log(newTodo);

    } catch (error) {
      console.error(error);
    }
    redirect('/')
  }

  // delete Todo
  const deleteTodo = async (e) => {
    "use server"


    connectDb()

    let id = JSON.parse(e.get("id")?.valueOf());

    const deletedTodo = await Todo.findByIdAndDelete({ _id: id })
    console.log(deletedTodo);


    redirect('/')
  }


  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Create Note</h1>
      <form action={createTodo}>
        <div>
          <label className="text-lg ">Title</label>
          <br />
          <input
            type="text"
            name="title"
            className="w-[100%] md:w-[50%] bg-slate-200 h-10 p-3"
          />
        </div>
        <div>
          <label>Todo</label>
          <br />
          <textarea
            type="text"
            name="todo"
            rows="3"
            className="w-[100%] md:w-[50%] bg-slate-200 p-3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-3 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white"
        >
          Submit
        </button>
      </form>

      <div>
        <ul>

          {allTodos.map((e) => {
            return (
              <>
                <div className="flex gap-4 m-5 justify-start items-center">
                  <li>{e.title}</li>
                  <li>{e.todo}</li>
                  <Link href={"/edit/" + e._id}>

                    <button className="bg-green-500 px-4 py-1">Update </button>
                  </Link>
                  <form action={deleteTodo}>
                    <input type="hidden" value={JSON.stringify(e._id)} name="id" />
                    <button className="bg-red-500 px-4 py-1">delete </button>
                  </form>
                </div>
              </>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default Home;
