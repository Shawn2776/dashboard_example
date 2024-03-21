import { addOrganization } from "@/lib/actions";
import { fetchIndustries } from "@/lib/data";
import React from "react";

const AddOrgPage = async () => {
  const industries = await fetchIndustries();

  return (
    <div className="p-5 mt-5 rounded-md bg-bgSoft">
      <form
        action={addOrganization}
        className="flex flex-wrap justify-between w-full"
      >
        <input
          type="text"
          placeholder="Organization Name"
          className="w-[45%] p-2 m-2"
          name="name"
          id="name"
          required
        />
        <select name="industry" id="industry" className="w-[45%] p-2 m-2">
          <option value="industry">Choose an Industry</option>
          {industries.map((industry) => (
            <option key={industry._id} value={industry.industry}>
              {industry.industry}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Domain"
          className="w-[45%] p-2 m-2"
          name="domain"
          id="domain"
          required
        />
        <input
          type="text"
          placeholder="Address Line 1"
          className="w-[45%] p-2 m-2"
          name="addrLine1"
          id="addrLine1"
          required
        />
        <input
          type="text"
          placeholder="Address Line 2"
          className="w-[45%] p-2 m-2"
          name="addrLine2"
          id="addrLine2"
        />
        <input
          type="text"
          placeholder="City"
          className="w-[45%] p-2 m-2"
          name="city"
          id="city"
          required
        />
        <select name="state" id="state" className="w-[45%] p-2 m-2">
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
          className="w-[45%] p-2 m-2"
          name="zip"
          id="zip"
          required
          pattern="\d{5}"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-[45%] p-2 m-2"
          name="phone"
          id="phone"
          required
          pattern="\d{10}"
        />
        <input
          type="email"
          placeholder="Admin Email"
          className="w-[45%] p-2 m-2"
          name="email"
          id="email"
          required
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddOrgPage;
