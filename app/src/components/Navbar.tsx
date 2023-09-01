import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="grid grid-rows-1 grid-cols-9 p-4 bg-slate-300">
        <div className="flex justify-center items-center">
          <Link href="/">🏰 MonuMint</Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/leaderboard">📊 LeaderBoard</Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/album">📖 Album</Link>
        </div>

        <div className="relative rounded-lg bg-gray-100 p-2 col-span-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-3 py-1 rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
          />
          <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/profile">👤 Profile</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
