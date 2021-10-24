import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

interface User {
    username: string
    email: string
}

const userData: User[] = [
    {
        username: "testuser",
        email: "testuser@email.com"
    },
    {
        username: "samus",
        email: "smaul@metroid.com"
    },
]

async function main() {
    console.log('clear db')
    await prisma.user.deleteMany();

    console.log(`Start seeding ...`)
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u,
        })
        console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


