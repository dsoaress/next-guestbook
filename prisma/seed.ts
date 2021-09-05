import { PrismaClient } from '@prisma/client'
import faker from 'faker'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding...`)
  for (let i = 1; i <= 50; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const name = `${firstName} ${lastName}`
    const email = faker.internet.email(firstName, lastName).toLowerCase()
    const image = faker.internet.avatar()
    const message = faker.lorem.paragraph(4)
    const createdAt = faker.date.recent()

    const user = await prisma.user.create({
      data: {
        name,
        email,
        // image,
        messages: {
          create: [
            {
              message,
              createdAt
            }
          ]
        }
      }
    })
    console.log(`Created user ${i} with id ${user.id}`)
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
