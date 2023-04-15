import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({})

async function main() {
  // await prisma.user.deleteMany()
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Sally",
  //       age: 12,
  //       email: "sally@test1.com"
  //     }
  //   ]
  // })
  const users = await prisma.user.findMany({
    where: {
      email: { contains: "@test.com"}
    },
  })

  console.log(users)
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })