import { describe, expect, it } from 'bun:test'
import { union } from '../src/types/union'

describe('Union Type', function() {
    it('Can be Union', function() {
        let something: number | string | boolean = "budi"
        expect(typeof(something)).toBe("string")
        something = false
        expect(typeof(something)).toBe("boolean")
        something = 100
        expect(typeof(something)).toBe("number")
    })

    it('param union', function() {
        expect(union("joko")).toBe("JOKO")
        expect(union(100)).toBe(200)
        expect(union(false)).toBe(true)
    })
})