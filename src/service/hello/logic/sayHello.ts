export interface Hello {
    name: string
    details: string
}

export const sayHello: () => Hello = () => {
    return {name: 'cintra', details: 'hello from the service'};
}
