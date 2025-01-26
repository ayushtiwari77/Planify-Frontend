import { MdDelete } from "react-icons/md";
const Card = () => {
  return (
    <div className="bg-amber-400 min-h-40 p-4 flex flex-col gap-5">
      <div className="text-4xl font-semibold flex justify-between  w-full">
        <h3 className="underline">title mera hai yeh </h3>
        <div className="flex gap-5 items-center">
          <input
            className="h-10 w-10   "
            type="checkbox"
            name="isComplete"
            id="isComplete"
          />

          <MdDelete className="text-red-600" />
        </div>
      </div>
      <div className="lower  w-full text-2xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur
        possimus quia neque debitis non, libero veritatis repellat laudantium
        numquam ducimus nobis vero explicabo sed id maxime molestiae ipsa esse
        architecto sapiente deserunt? Incidunt dolores, rerum, perspiciatis
        harum pariatur sed itaque quia aliquid distinctio unde quasi iure eos,
        nulla numquam!
      </div>
    </div>
  );
};

export default Card;
