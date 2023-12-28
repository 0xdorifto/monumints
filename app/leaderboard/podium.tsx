"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface PodiumProps {
  users: User[];
}

const Podium: React.FC<PodiumProps> = ({ users }) => {
  return (
    <div className="flex items-center justify-content space-x-8">
      <div className="flex items-center justify-content flex-col">
        <Image
          src={
            users[1].avatar_url
              ? users[1].avatar_url
              : "users/default-avatar.png"
          }
          alt="user"
          width={100}
          height={100}
        />
        <p>#2</p>
        <p>
          {users[1].username}, {users[1].points} points
        </p>
      </div>
      <div className="flex items-center justify-content flex-col">
        <Image
          src={
            users[0].avatar_url
              ? users[0].avatar_url
              : "users/default-avatar.png"
          }
          alt="user"
          width={200}
          height={200}
        />
        <p>#1</p>
        <p>
          {users[0].username}, {users[0].points} points
        </p>
      </div>
      <div className="flex items-center justify-content flex-col">
        <Image
          src={
            users[2].avatar_url
              ? users[2].avatar_url
              : "users/default-avatar.png"
          }
          alt="user"
          width={100}
          height={100}
        />
        <p>#3</p>
        <p>
          {users[2].username}, {users[2].points} points
        </p>
      </div>
    </div>
  );
};

export default Podium;
