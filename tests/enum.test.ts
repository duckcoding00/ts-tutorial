import { describe, expect, it } from 'bun:test'
import { Products } from '../src/types/enum'

describe('Enum Type', function() {
    it('Enum type', function() {
        let apple = Products.Food
        console.log(apple)
        expect(apple).toBe(Products.Food)
    })
})