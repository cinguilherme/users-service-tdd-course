export interface User {
    id?: number
    username: string
    email: string
}

export interface CreateUserInput {
    username: string
    email: string
}
