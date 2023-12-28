import { PrismaClient } from "@prisma/client";
import Card from "./card";

const prisma = new PrismaClient();

export default async function Page() {
  const monuments = await prisma.monument.findMany();

  return <div className="flex items-center justify-center flex-col">
    <h2>MONUMENTS</h2>
      {monuments.map((monument, index) => (
        <Card
        key={index}
        monument={monument}>
        </Card>
      ))}
  </div>;
}
