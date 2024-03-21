import { authenticate } from "@/lib/actions";
import LoginForm from "./loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-1/4 px-2 py-4 rounded-lg shadow-lg h-max bg-bgSoft shadow-black">
        <div className="flex items-center justify-center py-4">
          <span className="text-4xl">
            <span className="text-4xl text-red-500">SMRT</span> eVOTE
          </span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
