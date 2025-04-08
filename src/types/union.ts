export function union(value: number | String | boolean) {
    if (typeof(value) === "string") {
        return value.toUpperCase();
    } else if (typeof(value) == "number") {
        return value + 100;
    } else {
        return !value;
    }
}