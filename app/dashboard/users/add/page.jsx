import { fetchOrgs, fetchUserTypes } from "@/lib/data";
import React from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const AddUserPage = async () => {
  const userTypes = await fetchUserTypes();
  const orgs = await fetchOrgs();

  return (
    <div className="p-5 mt-5 rounded-lg bg-bgSoft">
      <form action="" className="flex flex-wrap justify-between">
        <input
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
          type="text"
          placeholder="First Name"
          name="fname"
          id="fname"
          required
        />
        <input
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
          type="text"
          placeholder="Last Name"
          name="lname"
          id="lname"
          required
        />
        <select
          name="org"
          id="org"
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
        >
          <option value="organization" disabled>
            Choose an Organization
          </option>
          {orgs.map((org) => (
            <option key={org._id} value={org.name}>
              {org.name}
            </option>
          ))}
        </select>
        <select
          name="userType"
          id="userType"
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
        >
          <option disabled value="userType">
            Choose a User Type
          </option>
          {userTypes.map((type) => (
            <option key={type._id} value={type.userType}>
              {capitalizeFirstLetter(type.userType)}
            </option>
          ))}
        </select>
        <input
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
          type="tel"
          placeholder="Phone Number"
          name="phone"
          id="phone"
          required
        />
        <input
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
        />

        <input
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
          type="text"
          placeholder="Address Line 1"
          name="addr1"
          id="addr1"
          required
        />
        <input
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
          type="text"
          placeholder="Address Line 2"
          name="addr2"
          id="addr2"
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          id="city"
          required
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
        />
        <select
          name="state"
          id="state"
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
        >
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
        <input
          type="number"
          placeholder="Zip Code"
          name="zip"
          id="zip"
          required
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
        />
        <select
          name="status"
          id="status"
          className="p-5 mb-5 border-2 rounded-md bg-bg text-text border-bgHover"
        >
          <option value="active">Choose Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="w-full p-5 rounded-lg cursor-pointer bg-button text-text"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
