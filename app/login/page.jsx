"use client";

import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-1/4 px-2 py-4 rounded-lg shadow-lg h-max bg-bgSoft shadow-black">
        <div className="flex items-center justify-center py-4">
          <span className="text-4xl">
            <span className="text-4xl text-red-500">SMRT</span> eVOTE
          </span>
        </div>
        <form action="submit" className="flex flex-col gap-4">
          <div className="px-2">
            <label className="text-textSoft" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full py-3 border-none"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="px-2">
            <label className="text-textSoft" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full py-3 border-none"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="px-2 mt-4">
            <button className="rounded-lg">Login</button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
