
export interface User {
    id?: number
    username: string
    email: string
}

export interface UserToCreate {
    username: string
    email: string
}

export interface CreateUserWire {
    user: string
    email: string
}

export interface CreateUserInput {
    username: string
    email: string
}
