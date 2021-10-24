import {PrismaClient} from "@prisma/client";

export async function getAllUsers() {
    const prisma = new PrismaClient()
    const res = await prisma.user.findMany();
    await prisma.$disconnect();
    return res;
}
