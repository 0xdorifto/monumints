export default function Home() {
  return (
    <div className="p-24">
      <div className="grid grid-rows-1 grid-cols-3 mb-24">
        <div className="grid grid-rows-1 grid-cols-3">
          <p>MonuMint</p>
          <p>LeaderBoard</p>
          <p>Album</p>
        </div>

        <div className="relative rounded-lg bg-gray-100 p-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-3 py-1 rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
          />
          <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        <div className="flex flex-row-reverse">
          <p>UserProfile</p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
