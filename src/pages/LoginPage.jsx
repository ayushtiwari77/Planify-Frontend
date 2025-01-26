import { Link, Navigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setIsLoading } from "../app/todoSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.isLoading);

  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(setIsAuth(true));
      toast.success(`${response.data.name} Logged In Successfully`);
      return <Navigate to="/content"></Navigate>;
    } catch (error) {
      dispatch(setIsAuth(false));
      console.log("error in login controller ", error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="h-screen w-screen bg-black grid place-items-center">
      <div className="bg-white h-1/2 w-1/2 p-5 grid items-center">
        <form
          onSubmit={handleLogin}
          className="flex items-center justify-center flex-col gap-10"
        >
          <div className="flex justify-center items-center  gap-5 text-3xl">
            <label htmlFor="email">Email : </label>
            <input
              className="focus:outline-none border-2 border-black text-center p-1"
              type="email"
              name="email"
              id="email"
              required
              placeholder="xyz@abc.com"
            />
          </div>
          <div className="flex justify-center items-center  gap-5 text-3xl">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="focus:outline-none border-2 border-black text-center p-1"
              placeholder="passcode"
            />
          </div>

          <button
            type="submit"
            className="p-6 rounded-md bg-black text-white text-3xl hover:bg-white hover:text-black   "
          >
            Login
          </button>
          <Link to="/register" className="underline">
            Register Here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
