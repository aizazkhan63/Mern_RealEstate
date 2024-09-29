import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="max-w-[85%] md:max-w-[65%] lg:max-w-[45%]  mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-3">Profile</h1>
      <form className="flex flex-col gap-5">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
        />
        <input
          type="text"
          placeholder="Username"
          className="border p-3 outline-none rounded-lg"
          name="username"
          // onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 outline-none rounded-lg"
          name="email"
          // onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 outline-none rounded-lg"
          name="password"
          // onChange={handleChange}
        />
        <button className="uppercase bg-slate-700 text-white p-3 rounded-lg opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account?</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
