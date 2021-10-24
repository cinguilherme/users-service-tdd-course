import { PrismaClient } from '@prisma/client'

export async function getUsers() {
    const prisma = new PrismaClient()
    const res = await prisma.user.findMany();
    await prisma.$disconnect();
    return res;
}

export async function createUsers(user: any) {
    const prisma = new PrismaClient()
    const created = await prisma.user.create({
        data: user
    })

    console.log("created run: ", created)

    await prisma.$disconnect();

    return created;
}
