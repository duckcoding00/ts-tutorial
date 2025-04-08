import { describe, expect, it } from 'bun:test'
import { sayHello } from '../src/sayhello'

describe('say hello', function(){
    it('say hello', function() {
        const name :String = "Joko"
        expect(name).toBe("Joko")
    })

    it('say hello + name', function() {
        const name :String = "Joko"
        expect(sayHello(name)).toBe("Hello Joko")
    })
})
