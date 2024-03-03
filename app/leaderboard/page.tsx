import { PrismaClient } from "@prisma/client";
import UserCard from "./card";
import Podium from "./podium";

const prisma = new PrismaClient();

export default async function Page() {
  const users = await prisma.user.findMany({
    orderBy: {
      points: "desc",
    },
  });

  return (
    <div className="flex items-center justify-content flex-col">
      <h2>Leaderboard</h2>
      <Podium users={users} />
      <div>
        {users.map((user, index) => (
          <UserCard key={index} user={user} index={index}></UserCard>
        ))}
      </div>
    </div>
  );
}
