import { PrismaClient } from "@prisma/client";
import { monuments, users } from "./data";

const prisma = new PrismaClient();

async function main() {
  await prisma.monument.deleteMany();
  await prisma.user.deleteMany();

  await prisma.$queryRaw`ALTER TABLE Monument AUTO_INCREMENT = 1`;
  await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;

  await prisma.monument.createMany({
    data: monuments,
  });

  for (const user of users) {
    const monumentsToConnect = user.monuments;

    await prisma.user.create({
      data: {
        ...user,
        monuments: {
          connect: monumentsToConnect,
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
