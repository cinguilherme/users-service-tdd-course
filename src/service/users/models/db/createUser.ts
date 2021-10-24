import {CreateUserInput} from "../../schemas/UserSchema";
import {Prisma, PrismaClient} from "@prisma/client";

export interface CreateUserResult {
    success: boolean
    created?: any
    fail?: any[]
}

type CreateUser = (user: CreateUserInput) => Promise<CreateUserResult>

export const createUsers: CreateUser = async (user) => {
    const prisma = new PrismaClient()

    try {
        const created = await prisma.user.create({
            data: user
        })
        await prisma.$disconnect();

        return {
            success: true,
            created: created
        }
    } catch (e) {
        await prisma.$disconnect();
        let fail = ["unable to create user"]
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === 'P2002') {
                const meta: any = e.meta!
                meta.target!
                    .map((f: string) => `There is a unique constraint violation, a new user cannot be created with this ${f}`)
                    .forEach((s: string) => fail.push(s))
            }
        }

        return {
            success: false,
            fail: fail
        }
    }

}
