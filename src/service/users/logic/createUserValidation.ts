import { UserToCreate } from "../schematas/UserSchema"

interface ValidationResult {
    valid: boolean
    details?: string
}

type ValidationFunction = (something: any) => ValidationResult

type Validation = (schemata: UserToCreate) => {
    validations: Array<ValidationResult>
}

export const validateCreateUserSchemata: Validation = (schemata: UserToCreate) => {

    return {
        validations: [
            validateUserEmail(schemata.email),
            validateUsername(schemata.username)
        ]
    }
}

export const validateUsername: ValidationFunction = (username: string) => {

    const valid = username.length > 5
    const details = valid ? "" : "Username not valid"
    return {
        valid,
        details
    }
}

export const validateUserEmail = (email: string) => {

    const valid = email.length > 5
    const details = valid ? "" : "Email not valid"

    return {
        valid,
        details
    }
}