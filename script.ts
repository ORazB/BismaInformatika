import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "Surya",
      email: "surya@gmail.com",
      password: "password123"
    }
  });
  console.log(user);
}

main().catch((e) => {
  console.error(e);
}).finally(async () => {
  await prisma.$disconnect();
});