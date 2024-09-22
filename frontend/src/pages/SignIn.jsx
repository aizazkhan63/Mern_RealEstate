import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-[85%] md:max-w-[65%] lg:max-w-[45%]  mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 outline-none rounded-lg"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 outline-none rounded-lg"
          name="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-up"} className="text-blue-700">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
