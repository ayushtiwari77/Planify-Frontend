import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Card = ({ todo }) => {
  async function handleDelete(id) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_PORT}/todo/delete/${id}`,
        {
          withCredentials: true,
        }
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function isCompleteStatus(id) {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_PORT}/todo/status/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="bg-amber-400 min-h-40 p-4 flex flex-col gap-5 w-[90%]">
      <div className="text-4xl font-semibold flex justify-between  w-full">
        <h3 className="underline">{todo.title} </h3>
        <div className="flex gap-5 items-center">
          <input
            className="h-10 w-10 cursor-pointer   "
            type="checkbox"
            name="isComplete"
            id="isComplete"
            checked={todo.isComplete}
            onClick={() => isCompleteStatus(todo._id)}
          />

          <MdDelete
            onClick={() => handleDelete(todo._id)}
            className="text-red-600 cursor-pointer"
          />
        </div>
      </div>
      <div className="lower  w-full text-2xl ">{todo.description}</div>
    </div>
  );
};

export default Card;
