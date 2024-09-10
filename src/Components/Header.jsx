import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm md:text-xl flex flex-wrap">
            <span className="text-slate-500">Pro_</span>
            <span className="text-slate-700">Estate.</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="outline-none bg-transparent w-28 md:w-64 "
          />
          <FaSearch className="cursor-pointer text-slate-500" />
        </form>
        <ul className="flex gap-4 font-semibold">
          <Link
            to={"/"}
            className="cursor-pointer text-slate-700 hidden sm:inline hover:underline"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="cursor-pointer text-slate-700 hidden sm:inline hover:underline"
          >
            About
          </Link>
          <Link
            to={"/sign-in"}
            className="cursor-pointer text-slate-700 hover:underline"
          >
            Sign in
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
