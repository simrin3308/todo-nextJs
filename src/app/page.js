
import connectDb from "./connectDb";
import Todo from "./models/Todo"
// console.log(Todo);
const Home = async () => {


  // create todo
  const createTodo = async(e) => {
    "use server"

    let title = e.get("title")?.valueOf()
    let todo = e.get("todo")?.valueOf()

    try {
      connectDb()
      const newTodo = new Todo({title,todo})
      await newTodo.save()
      console.log(newTodo);

    } catch (error) {
      console.error(error);
    }

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
    </main>
  )
}

export default Home;
