"use client";

import { authenticate } from "@/lib/actions";
import { useState } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  //   const [error, setError] = useState();

  //   const handleLogin = async (formData) => {
  //     const data = await authenticate(formData);
  //     data.error && setError(data.error);
  //   };

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="px-2">
        <label className="text-textSoft" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full py-3 border-none"
        />
      </div>
      <div className="px-2">
        <label className="text-textSoft" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="w-full py-3 border-none"
        />
      </div>
      <div className="px-2 mt-4">
        <button className="rounded-lg">Login</button>
      </div>
      <div className="flex justify-center">{state && state}</div>
    </form>
  );
};

export default LoginForm;

{
  /* <form action={handleLogin} className="flex flex-col gap-4">
      <div className="px-2">
        <label className="text-textSoft" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full py-3 border-none"
        />
      </div>
      <div className="px-2">
        <label className="text-textSoft" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          className="w-full py-3 border-none"
        />
      </div>
      <div className="px-2 mt-4">
        <button className="rounded-lg">Login</button>
      </div>
      <div className="flex justify-center">{error && error}</div>
    </form> */
}
