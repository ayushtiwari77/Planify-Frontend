import Card from "../components/Card";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../app/todoSlice";

const ContentPage = () => {
  const dispatch = useDispatch();

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

  return (
    <div className="min-h-screen w-screen  bg-blue-900 p-10 flex flex-col items-center gap-[50px]">
      <div className="flex items-center justify-between w-3/4">
        <h1 className="text-yellow-400 text-3xl font-bold underline ">
          Welcome Back Sonu Chinaar
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 font-semibold text-white  w-fit p-2 rounded-md "
        >
          Logout
        </button>
      </div>

      <div>
        <form className="text-3xl bg-amber-400 text-black flex flex-col gap-5 p-4 items-center my-5">
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
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ContentPage;
