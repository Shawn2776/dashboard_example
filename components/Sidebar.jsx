import Image from "next/image";
import {
  MdLocationCity,
  MdDashboard,
  MdSupervisedUserCircle,
  MdOutlineSettings,
  MdHelpCenter,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Organizations",
        path: "/dashboard/organizations",
        icon: <MdLocationCity />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/noavatar2.png"
          alt=""
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <span className="font-medium">Shawn Harrington</span>
          <span className="text-xs text-textSoft">Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className="text-textSoft font-bold text-sm mx-2 my-0">
              {item.title}
            </span>
            {item.list.map((listItem) => (
              <MenuLink item={listItem} key={listItem.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-5 mx-1 flex items-center gap-3 cursor-pointer rounded-md bg-none border-none w-full text-text hover:bg-bgHover">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
