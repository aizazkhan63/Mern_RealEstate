import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <div className="max-w-[85%] md:max-w-[65%] lg:max-w-[45%]  mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-7">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 outline-none rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 outline-none rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 outline-none rounded-lg"
          id="password"
        />
        <button className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"} className="text-blue-700">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp