import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-md flex gap-5 cursor-pointer w-full hover:bg-bgHover">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className="text-xs font-semibold">10,273</span>
        <span className="text-sm font-light">
          <span className="text-lime-500">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
