import axios from "axios";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setIsLoading } from "../app/todoSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.isLoading);

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/auth/register`,
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(`${response.data.name}, you are successfully registered`);
      dispatch(setIsAuth(true));
      return <Navigate to="/content"></Navigate>;
    } catch (error) {
      dispatch(setIsAuth(false));
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-black grid place-items-center">
      <div className="bg-white h-1/2 w-1/2 p-5 grid items-center">
        <form
          onSubmit={handleRegister}
          className="flex items-center justify-center flex-col gap-10"
        >
          <div className="flex justify-center items-center  gap-5 text-3xl">
            <label htmlFor="fullname">FullName :</label>
            <input
              type="text"
              id="fullname"
              required
              className="focus:outline-none border-2 border-black text-center p-1"
              placeholder="John Doe"
            />
          </div>

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
            className="p-6 rounded-md bg-black text-white text-3xl hover:bg-white hover:text-black"
          >
            Register
          </button>
          <Link to="/" className="underline">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
