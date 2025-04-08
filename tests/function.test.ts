import { describe, expect, it } from 'bun:test'
import { callMyName, restParameter, sayHello } from '../src/function/function'

describe('Function', function() {
    it('simple arrow function', function() {
        console.log(sayHello("budi"))
        expect(sayHello("budi")).toBe("hello budi")
    })

    it('default parameter', function() {
        console.log(sayHello())
        expect(sayHello()).toBe("hello stranger")
    })

    it('rest parameter', () => {
        console.log(restParameter(1,2,3,4,5))
        expect(restParameter(1,2,3,4,5)).toBe(15)
    })

    it('function as parameter', () => {
        // using anonymous function
        expect(callMyName("budi", (name: string) => name.toUpperCase())).toBe('hello BUDI')
    })

    it('tennary operator', () => {
        let persegi: number = 100
        const res = persegi > 101 ? 'Yes' : 'No'
        expect(res).toBe('No')
    })
})