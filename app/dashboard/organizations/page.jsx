import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { searchParams } from "next/navigation";
import { fetchOrganizations } from "@/lib/data";

const OrganizationPage = async () => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, orgs } = await fetchOrganizations(q, page);

  return (
    <div className="p-5 mt-5 rounded-lg bg-bgSoft">
      <div className="flex items-center justify-between">
        <div className="w-[300px]">
          <Search placeholder={"Search for an organization..."} />
        </div>
        <div>
          <Link href="/dashboard/organizations/add">
            <button className="p-2 rounded-lg cursor-pointer bg-button text-text">
              New Organization
            </button>
          </Link>
        </div>
      </div>
      <table className="w-full mt-7">
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>Users</th>
            <th>Created</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orgs.map((org) => (
            <tr className="cursor-pointer hover:bg-bgHover" key={org._id}>
              <td>
                <div className="flex items-center justify-start gap-2">
                  <Image
                    src={org.image || "/nic_edu.png"}
                    width={40}
                    height={40}
                    alt=""
                    className="object-cover rounded-full"
                  />
                  {org.name}
                </div>
              </td>
              <td className="text-center">
                <Link href={`https://www.${org.domain}`} target="_blank">
                  {org.domain}
                </Link>
              </td>
              <td>302</td>
              <td>{org.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <span
                  className={`${
                    org.status === "active" ? "bg-green-500" : "bg-orange-500"
                  } px-3 py-1 rounded-md text-bgSoft`}
                >
                  {org.status}
                </span>
              </td>
              <td>
                <div className="flex justify-center gap-4">
                  <Link href={`/dashboard/organizations/${org._id}`}>
                    <button
                      className={`py-2 px-3 rounded-lg text-text cursor-pointer bg-green-500`}
                    >
                      View
                    </button>
                  </Link>
                  <button
                    className={`py-2 px-3 rounded-lg text-text cursor-pointer bg-red-500`}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination /> */}
    </div>
  );
};

export default OrganizationPage;
