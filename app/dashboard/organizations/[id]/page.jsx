import { updateOrganization } from "@/lib/actions";
import { fetchIndustries, fetchOrg, fetchStatuses } from "@/lib/data";
import Image from "next/image";
import React from "react";

const OrganizationPage = async ({ params }) => {
  const id = params.id;
  const org = await fetchOrg({ _id: id });
  const industries = await fetchIndustries();
  const statuses = await fetchStatuses();
  const newId = org._id;

  return (
    <div className="flex gap-[50px] mt-3">
      <div className="flex-1 p-3 font-bold -bg--bgSoft rounded-xl -text--textSoft">
        <div className="w-full h-[400px] relative rounded-md overflow-hidden mb-3 ">
          <Image
            src={org.image || "/nic_edu.png"}
            fill
            alt={org.image + "'s logo or default logo"}
          />
        </div>
        <div className="w-full text-2xl text-center">{org.name}</div>
      </div>
      <div className="flex-[2_2_0%] -bg--bgSoft p-3 rounded-xl font-bold -text--textSoft">
        <form
          action={updateOrganization}
          className="flex flex-wrap justify-between"
        >
          <input type="hidden" name="_id" value={newId} />
          <div className="flex w-full">
            <div className="flex flex-col w-full mb-4 mr-2">
              <label className="w-full">Organization Name</label>
              <input
                type="text"
                name="org"
                id="org"
                placeholder={org.name}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="w-full">Domain</label>
              <input
                type="text"
                name="domain"
                id="domain"
                placeholder={org.domain}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full">
              <label className="w-full">Admin Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={org.email}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full mb-4 ml-2">
              <label className="w-full">Phone</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder={org.phone}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex flex-col w-full">
              <label className="w-full">Industry</label>
              <select name="industry" id="industry" className="w-full">
                {industries.map((industry) => (
                  <option
                    key={industry._id}
                    value={industry.industry}
                    selected={industry.industry === org.industry}
                  >
                    {industry.industry.charAt(0).toUpperCase() +
                      industry.industry.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full mb-10 ml-2">
              <label>Status</label>
              <select name="status" id="status" className="w-full">
                {statuses.map((status) => (
                  <option
                    key={status._id}
                    value={status.status}
                    selected={status.status === org.status}
                  >
                    {status.status.charAt(0).toUpperCase() +
                      status.status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label>Address Line 1</label>
          <input
            type="text"
            placeholder={org.addrLine1}
            name="addrLine1"
            id="addrLine1"
            className="w-full mb-2"
          />
          <label>Address Line 2</label>
          <input
            type="text"
            placeholder={org.addrLine2}
            name="addrLine2"
            id="addrLine2"
            className="w-full mb-2"
          />

          <div className="flex justify-between w-full">
            <div className="w-[30%] flex flex-col">
              <label>City</label>
              <input
                type="text"
                placeholder={org.city}
                name="city"
                id="city"
                className="w-full"
              />
            </div>
            <div className="w-[30%] flex flex-col">
              <label>State</label>
              <select name="state" id="state" className="w-full">
                <option value="state">Choose a State</option>
                <option selected={org.state === "al"} value="al">
                  AL
                </option>
                <option selected={org.state === "ak"} value="ak">
                  AK
                </option>
                <option selected={org.state === "az"} value="az">
                  AZ
                </option>
                <option selected={org.state === "ar"} value="ar">
                  AR
                </option>
                <option selected={org.state === "ca"} value="ca">
                  CA
                </option>
                <option selected={org.state === "co"} value="co">
                  CO
                </option>
                <option selected={org.state === "ct"} value="ct">
                  CT
                </option>
                <option selected={org.state === "de"} value="de">
                  DE
                </option>
                <option selected={org.state === "fl"} value="fl">
                  FL
                </option>
                <option selected={org.state === "ga"} value="ga">
                  GA
                </option>
                <option selected={org.state === "hi"} value="hi">
                  HI
                </option>
                <option selected={org.state === "id"} value="id">
                  ID
                </option>
                <option selected={org.state === "il"} value="il">
                  IL
                </option>
                <option selected={org.state === "in"} value="in">
                  IN
                </option>
                <option selected={org.state === "ia"} value="ia">
                  IA
                </option>
                <option selected={org.state === "ks"} value="ks">
                  KS
                </option>
                <option selected={org.state === "ky"} value="ky">
                  KY
                </option>
                <option selected={org.state === "la"} value="la">
                  LA
                </option>
                <option selected={org.state === "me"} value="me">
                  ME
                </option>
                <option selected={org.state === "md"} value="md">
                  MD
                </option>
                <option selected={org.state === "ma"} value="ma">
                  MA
                </option>
                <option selected={org.state === "mi"} value="mi">
                  MI
                </option>
                <option selected={org.state === "mn"} value="mn">
                  MN
                </option>
                <option selected={org.state === "ms"} value="ms">
                  MS
                </option>
                <option selected={org.state === "mo"} value="mo">
                  MO
                </option>
                <option selected={org.state === "mt"} value="mt">
                  MT
                </option>
                <option selected={org.state === "ne"} value="ne">
                  NE
                </option>
                <option selected={org.state === "ny"} value="nv">
                  NV
                </option>
                <option selected={org.state === "nh"} value="nh">
                  NH
                </option>
                <option selected={org.state === "nj"} value="nj">
                  NJ
                </option>
                <option selected={org.state === "nm"} value="nm">
                  NM
                </option>
                <option selected={org.state === "ny"} value="ny">
                  NY
                </option>
                <option selected={org.state === "nc"} value="nc">
                  NC
                </option>
                <option selected={org.state === "nd"} value="nd">
                  ND
                </option>
                <option selected={org.state === "oh"} value="oh">
                  OH
                </option>
                <option selected={org.state === "ok"} value="ok">
                  OK
                </option>
                <option selected={org.state === "or"} value="or">
                  OR
                </option>
                <option selected={org.state === "pa"} value="pa">
                  PA
                </option>
                <option selected={org.state === "ri"} value="ri">
                  RI
                </option>
                <option selected={org.state === "sc"} value="sc">
                  SC
                </option>
                <option selected={org.state === "sd"} value="sd">
                  SD
                </option>
                <option selected={org.state === "tn"} value="tn">
                  TN
                </option>
                <option selected={org.state === "tx"} value="tx">
                  TX
                </option>
                <option selected={org.state === "ut"} value="ut">
                  UT
                </option>
                <option selected={org.state === "vt"} value="vt">
                  VT
                </option>
                <option selected={org.state === "va"} value="va">
                  VA
                </option>
                <option selected={org.state === "wa"} value="wa">
                  WA
                </option>
                <option selected={org.state === "wv"} value="wv">
                  WV
                </option>
                <option selected={org.state === "wi"} value="wi">
                  WI
                </option>
                <option selected={org.state === "wy"} value="wy">
                  WY
                </option>
              </select>
            </div>
            <div className="w-[30%] flex flex-col">
              <label>Zip Code</label>
              <input
                type="number"
                placeholder={org.zip}
                name="zip"
                id="zip"
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

export default OrganizationPage;
