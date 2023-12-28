"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface UserCardProps {
  user: User;
  index: number;
}

const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
  return (
    <div className="border-2 rounded-lg m-4">
      <Image
        src={user.avatar_url ? user.avatar_url : "/users/default-avatar.png"}
        alt="user"
        width={100}
        height={100}
      />
      <p>#{(index + 1).toString()}</p>
      <h2>{user.username}</h2>
      <p>{user.points}</p>
    </div>
  );
};

export default UserCard;
