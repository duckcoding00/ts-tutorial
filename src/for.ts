type Value = number | string

export const forReguler = (values: Value[]): void => {
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}

export const forIn = (values: Value[]): void => {
    for (const idx in values) {
        console.log(`${idx}: ${values[idx]}`);
    }
}

export const forOf = (values: Value[]): void => {
    for (const val of values) {
        console.log(`${val}`);
    }
}