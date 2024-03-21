import { authenticate } from "@/lib/actions";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-1/4 px-2 py-4 rounded-lg shadow-lg h-max bg-bgSoft shadow-black">
        <div className="flex items-center justify-center py-4">
          <span className="text-4xl">
            <span className="text-4xl text-red-500">SMRT</span> eVOTE
          </span>
        </div>
        <form action={authenticate} className="flex flex-col gap-4">
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
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
