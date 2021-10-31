import { UserToCreate } from "../schematas/user.schemata"

interface ValidationResult {
    field: string
    valid: boolean
    details?: string
}

type ValidationFunction = (something: any) => ValidationResult

export interface ValidationsResult {
    validations: Array<ValidationResult>
}

type Validation = (schemata: UserToCreate) => ValidationsResult

export const validateCreateUserSchemata: Validation = (schemata: UserToCreate) => {

    return {
        validations: [
            validateUserEmail(schemata.email),
            validateUsername(schemata.username)
        ]
    }
}

export const validateUsername: ValidationFunction = (username: string) => {

    try {
        const valid = username.length > 5
        const details = valid ? "" : "Username not valid"
        return {
            field: "user",
            valid,
            details
        }
    } catch (e) {

        return {
            field: "user",
            valid: false,
            details: "unkonwn error"
        }
    }
}

export const validateUserEmail: ValidationFunction = (email: string) => {

    try {
        const valid = email.length > 5
        const details = valid ? "" : "Email not valid"

        return {
            field: "email",
            valid,
            details
        }
    } catch (e) {
        return {
            field: "email",
            valid: false,
            details: "unkown error"
        }
    }
}