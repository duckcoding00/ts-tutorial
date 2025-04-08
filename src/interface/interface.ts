export interface Customer {
    name?: string
    age?: number
    address?: string
}

export function CreateCustomer(name?: string, age?: number, address?: string): Customer {
    return {
        name: name,
        age: age,
        address: address
    }
}