import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-row-1 grid-cols-2">
        <Image
          src="/torredebelem.png"
          alt="torre de belem"
          width={200}
          height={200}
        />
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
      <div className="grid grid-row-1 grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </>
  );
}
