import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <form
        action=""
        className="flex flex-col gap-3 bg-white p-4 w-full max-w-sm sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]"
      >
        <h1 className="font-bold text-3xl">Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-200 rounded-md px-2 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-200 rounded-md px-2 py-2"
        />
        <input
          type="password"
          placeholder="password"
          className="border border-gray-200 rounded-md px-2 py-2"
        />
        <button className="bg-blue-600 text-white my-2 rounded-md p-2">
          SignUp
        </button>
        <p>
          Already Have an Account?
          <Link to={"/Login"} className="text-blue-800">
            Click Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
