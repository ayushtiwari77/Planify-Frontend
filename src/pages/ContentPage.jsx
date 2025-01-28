import Card from "../components/Card";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../app/todoSlice";
import { useEffect, useState } from "react";

const ContentPage = () => {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);

  async function handleLogout() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_PORT}/auth/logout`,
        { withCredentials: true }
      );
      dispatch(setIsAuth(false));
      toast.success(response.data.message);
      return <Navigate to="/"></Navigate>;
    } catch (error) {
      console.log("error is in logut handler", error);
      toast.error(error.response.data.message);
    }
  }

  async function handleCreate(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/todo/create`,
        {
          title,
          description,
        },
        {
          withCredentials: true,
        }
      );

      e.target[0].value = "";
      e.target[1].value = "";

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    async function getAllTasks() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_PORT}/todo/bring`,
          {
            withCredentials: true,
          }
        );
        setTodos(response.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    getAllTasks();
  }, [todos]);

  return (
    <div className="min-h-screen w-screen  bg-blue-900 p-10 flex flex-col items-center gap-[50px]">
      <div className="flex items-center justify-between w-3/4">
        <h1 className="text-yellow-400 text-3xl font-bold underline ">
          Welcome Back User
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 font-semibold text-white  w-fit p-2 rounded-md "
        >
          Logout
        </button>
      </div>

      <div>
        <form
          onSubmit={handleCreate}
          className="text-3xl bg-amber-400 text-black flex flex-col gap-5 p-4 items-center my-5"
        >
          <div className="flex gap-4 items-center  justify-center">
            <label htmlFor="title">Title :</label>
            <input
              className="border-white border-1 text-center w-[50vw] h-[60px] focus:outline-none"
              type="text"
              id="title"
              required
              placeholder="enter title"
            />
          </div>

          <div className="flex gap-4 items-center  justify-center">
            <label htmlFor="desc">Description :</label>
            <textarea
              className="border-white border-1 text-center w-[50vw] focus:outline-none "
              type="text-area"
              id="desc"
              required
              placeholder="Describe Todo"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-amber-400 w-fit p-2 hover:bg-amber-400 hover:text-blue-900 rounded-md border-black border "
          >
            Create Todo
          </button>
        </form>
      </div>

      <div className="bg-blue-900 w-[90%] min-h-[50vh] p-3 flex flex-col items-center gap-16">
        {todos.map((todo, ind) => (
          <Card key={ind} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
