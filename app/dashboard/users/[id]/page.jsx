import { fetchUser } from "@/lib/data";
import Image from "next/image";
import React from "react";

const UserPage = async ({ params }) => {
  const id = params;
  console.log(`params: ${params}`);
  // const user = fetchUser(id);

  return (
    <div className="flex gap-[50px] mt-3">
      <div className="flex-1 p-3 font-bold -bg--bgSoft rounded-xl -text--textSoft">
        <div className="w-full h-[400px] relative rounded-md overflow-hidden mb-3 ">
          <Image
            src={"/noavatar2.png"}
            fill
            alt=""
            // alt={`${user.fname} ${user.lname}`}
          />
        </div>
        <div className="w-full text-2xl text-center">
          {/* {user.fname} {user.lname} */}
        </div>
      </div>
      <div className="flex-[2_2_0%] -bg--bgSoft p-3 rounded-xl font-bold -text--textSoft">
        <form className="flex flex-wrap justify-between">
          <div className="flex w-full">
            <div className="flex flex-col w-full mb-4 mr-2">
              <label className="w-full">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                value="John"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="w-full">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                value="Doe"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full">
              <label className="w-full">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value="john@gmail.com"
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full mb-4 ml-2">
              <label className="w-full">Phone</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                value={2085009450}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex flex-col w-full mb-4 mr-2">
              <label className="w-full">Organization</label>
              <input
                type="text"
                name="org"
                id="org"
                value="North Idaho College"
                className="w-full"
                disabled
              />
            </div>
            <div className="flex flex-col w-full"></div>
          </div>

          <div className="flex justify-between w-full mb-10">
            <div className="w-full mr-1">
              <label className="w-full">Role</label>
              <select name="role" id="role" className="w-full">
                <option value="role">Choose a Role</option>
                <option value="admin" selected>
                  Admin
                </option>
                <option value="editor">Editor</option>
                <option value="faculty">Faculty</option>
                <option value="staff">Staff</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div className="w-full ml-1">
              <label>Status</label>
              <select name="status" id="status" className="w-full">
                <option value="status">Choose a Status</option>
                <option value="active" selected>
                  Active
                </option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <label>Address Line 1</label>
          <input
            type="text"
            value={"2541 W. Elmwoood Drive"}
            name="addr1"
            id="addr1"
            required
            className="w-full mb-2"
          />
          <label>Address Line 2</label>
          <input
            type="text"
            value={""}
            name="addr2"
            id="addr2"
            className="w-full mb-2"
          />

          <div className="flex justify-between w-full">
            <div className="w-[30%] flex flex-col">
              <label>City</label>
              <input
                type="text"
                value={"Coeur d'Alene"}
                name="city"
                id="city"
                required
                className="w-full"
              />
            </div>
            <div className="w-[30%] flex flex-col">
              <label>State</label>
              <select name="state" id="state" className="w-full">
                <option value="state">Choose a State</option>
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
                <option value="id" selected>
                  ID
                </option>
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
              <label>Zip Code</label>
              <input
                type="number"
                value={83815}
                name="zip"
                id="zip"
                required
                className="w-full"
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
