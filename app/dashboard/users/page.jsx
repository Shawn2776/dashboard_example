import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { fetchUsers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="p-5 mt-5 rounded-md bg-bgSoft">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a user..."} />
        <Link href="/dashboard/users/add">
          <button className="p-3 rounded-md cursor-pointer bg-button text-text">
            New User
          </button>
        </Link>
      </div>
      <table className="w-full mt-8">
        <thead>
          <tr>
            <th className="flex justify-start">Name/ Organization</th>
            <th>Email</th>
            <th>Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="cursor-pointer hover:bg-bgHover">
              <td className="flex gap-4">
                <div className="flex items-center justify-center object-cover">
                  <Image
                    src={user.img || "/noavatar2.png"}
                    width={50}
                    height={50}
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="flex justify-start gap-1">
                    {user.fname} {user.lname}
                  </div>
                  <div className="text-xs text-textSoft">
                    {user.organization}
                  </div>
                </div>
              </td>
              <td className="text-center">{user.email}</td>
              <td>01.13.2022</td>
              <td className="capitalize">{user.role}</td>
              <td>
                <span
                  className={`${
                    user.status === "active" ? "bg-green-500" : "bg-orange-500"
                  } px-3 py-1 rounded-md text-bgSoft`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <div className="flex justify-center gap-3">
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button
                      className={`px-[10px] py-[5px] text-text border-none cursor-pointer bg-button rounded-md`}
                    >
                      View
                    </button>
                  </Link>

                  <button
                    className={`px-[10px] py-[5px] text-text border-none cursor-pointer bg-red-500 rounded-md`}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
