export type SomeAlias = {
    name: string;
    age: number;
}

export function CreateAlias(value: SomeAlias): SomeAlias {
    let data: SomeAlias = {
        name: value.name,
        age: value.age
    }

    return data 
}