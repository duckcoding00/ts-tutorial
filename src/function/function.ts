export const sayHello = (name: String = "stranger"): String => `hello ${name}`

export const restParameter = (...data: number[]): number => 
    data.reduce((sum, value) => sum + value, 0)

// function as a parameter
export const callMyName = (name: string, say: (name: string) => string): String => `hello ${say(name)}`
