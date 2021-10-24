import {PrismaClient} from '@prisma/client'
import {CreateUserInput, User} from "../schemas/UserSchema";

export async function getUsers() {
    const prisma = new PrismaClient()
    const res = await prisma.user.findMany();
    await prisma.$disconnect();
    return res;
}

export async function createUsers(user: CreateUserInput) {
    const prisma = new PrismaClient()

    const created = await prisma.user.create({
        data: user
    }).catch(e => {
        console.log(e)
        return {error: e}
    });

    await prisma.$disconnect();

    return created;
}

export async function updateUsers(user: User) {
    const prisma = new PrismaClient()
    const updated = await prisma.user.delete({
        where: {
            id: user.id!
        },
        data: user as never
    });

    await prisma.$disconnect();

    return updated;
}

export async function deleteUsers(user: User) {
    const prisma = new PrismaClient()
    const deleted = await prisma.user.delete({
        where: {
            id: user.id!
        },
    });

    await prisma.$disconnect();

    return deleted;
}
