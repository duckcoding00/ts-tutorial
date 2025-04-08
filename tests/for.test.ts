import { describe, it } from 'bun:test'
import { forIn, forOf, forReguler } from '../src/for'

describe('for operator', () => {
    it('regular', () => {
        const numbers: number[] = [1,2,3,4,5]
        console.log(forReguler(numbers));
    })

    it('in', () => {
        const numbers: number[] = [22,11,23,24,25]
        console.log(forIn(numbers));
    })

    it('out', () => {
        const names: string[] = ["joko", "budi", "reza"]
        console.log(forOf(names))
    })
})