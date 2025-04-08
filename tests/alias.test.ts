import { describe, it } from 'bun:test'
import { CreateAlias } from '../src/types/alias'
import type { SomeAlias } from '../src/types/alias'

describe('Alias Type', function() {
    it('Alias as a parameter', function() {
        let data: SomeAlias = {
            age: 20,
            name: "budi"
        }
        console.log(CreateAlias(data))
    })
})