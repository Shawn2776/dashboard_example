import { updateUser } from "@/lib/actions";
import { fetchStatuses, fetchUser, fetchUserTypes } from "@/lib/data";
import Image from "next/image";
import React from "react";

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

const UserPage = async ({ params }) => {
  const id = params.id;
  const user = await fetchUser({ _id: id });
  const userTypes = await fetchUserTypes();
  const statuses = await fetchStatuses();
  const newId = user._id;

  return (
    <div className="flex gap-[50px] mt-3">
      <div className="flex-1 p-3 font-bold -bg--bgSoft rounded-xl -text--textSoft">
        <div className="w-full h-[400px] relative rounded-md overflow-hidden mb-3 ">
          <Image
            src={user.img || "/noavatar2.png"}
            fill
            alt={user.fname + " " + user.lname}
          />
        </div>
        <div className="w-full text-2xl text-center">
          {user.fname} {user.lname}
        </div>
      </div>
      <div className="flex-[2_2_0%] -bg--bgSoft p-3 rounded-xl font-bold -text--textSoft">
        <form action={updateUser} className="flex flex-wrap justify-between">
          <input type="hidden" name="_id" value={newId} />
          <div className="flex w-full">
            <div className="flex flex-col w-full mb-4 mr-2">
              <label htmlFor="fname" className="w-full">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="w-full"
                placeholder={user.fname}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lname" className="w-full">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="w-full"
                placeholder={user.lname}
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="w-full">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full"
                placeholder={user.email}
              />
            </div>
            <div className="flex flex-col w-full mb-4 ml-2">
              <label htmlFor="tel" className="w-full">
                Phone
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                className="w-full"
                placeholder={user.phone}
              />
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full mb-4 mr-2">
              <label htmlFor="org" className="w-full">
                Organization
              </label>
              <input
                type="text"
                name="org"
                id="org"
                className="w-full"
                disabled
                value={user.organization}
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="password" className="w-full">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-between w-full mb-10">
            <div className="w-full mr-1">
              <label htmlFor="userType" className="w-full">
                User Type
              </label>
              <select name="userType" id="userType" className="w-full">
                {userTypes.map((type) => (
                  <option
                    key={type._id}
                    value={user.userType}
                    selected={type.userType === user.userType}
                  >
                    {type.userType.charAt(0).toUpperCase() +
                      type.userType.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full ml-1">
              <label htmlFor="status">Status</label>
              <select name="status" id="status" className="w-full">
                {statuses.map((type) => (
                  <option
                    value={user.status}
                    key={type._id}
                    selected={type.status === user.status}
                  >
                    {type.status.charAt(0).toUpperCase() + type.status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label htmlFor="addrLine1">Address Line 1</label>
          <input
            type="text"
            name="addrLine1"
            id="addrLine1"
            required
            className="w-full mb-2"
            placeholder={user.addrLine1}
          />
          <label htmlFor="addrLine2">Address Line 2</label>
          <input
            type="text"
            name="addrLine2"
            id="addrLine2"
            className="w-full mb-2"
            placeholder={user.adrrLine2}
          />

          <div className="flex justify-between w-full">
            <div className="w-[30%] flex flex-col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                required
                className="w-full"
                placeholder={user.city}
              />
            </div>
            <div className="w-[30%] flex flex-col">
              <label htmlFor="state">State</label>
              <select name="state" id="state" className="w-full">
                <option value={user.state}>{user.state}</option>
                <option value="al">AL</option>
                <option value="ak">AK</option>
                <option value="az">AZ</option>
                <option value="ar">AR</option>
                <option value="ca">CA</option>
                <option value="co">CO</option>
                <option value="ct">CT</option>
                <option value="de">DE</option>
                <option value="fl">FL</option>
                <option value="ga">GA</option>
                <option value="hi">HI</option>
                <option value="id">ID</option>
                <option value="il">IL</option>
                <option value="in">IN</option>
                <option value="ia">IA</option>
                <option value="ks">KS</option>
                <option value="ky">KY</option>
                <option value="la">LA</option>
                <option value="me">ME</option>
                <option value="md">MD</option>
                <option value="ma">MA</option>
                <option value="mi">MI</option>
                <option value="mn">MN</option>
                <option value="ms">MS</option>
                <option value="mo">MO</option>
                <option value="mt">MT</option>
                <option value="ne">NE</option>
                <option value="nv">NV</option>
                <option value="nh">NH</option>
                <option value="nj">NJ</option>
                <option value="nm">NM</option>
                <option value="ny">NY</option>
                <option value="nc">NC</option>
                <option value="nd">ND</option>
                <option value="oh">OH</option>
                <option value="ok">OK</option>
                <option value="or">OR</option>
                <option value="pa">PA</option>
                <option value="ri">RI</option>
                <option value="sc">SC</option>
                <option value="sd">SD</option>
                <option value="tn">TN</option>
                <option value="tx">TX</option>
                <option value="ut">UT</option>
                <option value="vt">VT</option>
                <option value="va">VA</option>
                <option value="wa">WA</option>
                <option value="wv">WV</option>
                <option value="wi">WI</option>
                <option value="wy">WY</option>
              </select>
            </div>
            <div className="w-[30%] flex flex-col">
              <label htmlFor="zip">Zip Code</label>
              <input
                type="number"
                name="zip"
                id="zip"
                required
                className="w-full"
                placeholder={user.zip}
              />
            </div>
          </div>
          <button className="mt-2 rounded-md">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
