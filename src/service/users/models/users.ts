import {PrismaClient} from '@prisma/client'
import {User} from "../schemas/UserSchema";
import {createUsers} from "./db/createUser";
import {getAllUsers} from "./db/getAllUsers";

export async function getUsers() {
    return await getAllUsers()
}

export async function createUser(user: User) {
    return await createUsers(user)
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
