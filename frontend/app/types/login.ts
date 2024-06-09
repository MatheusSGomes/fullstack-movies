export type SignInRequestData = {
    email: string,
    password: string,
}

export type SignInResponseData = {
    data: {
        message: string
        token: string,
        token_type: string
    }
}