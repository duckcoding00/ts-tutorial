import { describe, expect, it } from 'bun:test'
import { CreateCustomer, type Customer } from '../src/interface/interface'
import type { KeyValue } from '../src/interface/indexable_interface'
import type { Manager } from '../src/interface/extendable_interface'
import type { person } from '../src/interface/method_interface'

describe('Interface Type', function() {
    it('using interface', function() {    
        const CustomerA = CreateCustomer("Joko", 20, "Papua")
        console.log(CustomerA)
        expect(CustomerA.name).toBe("Joko")
    })

    it('using indexable interfae', function() {
        const Plat : KeyValue = {
            "AB": "Yogyakarta",
            "BM": "Riau",
            "BH": "Jambi",
            "B": "Jakarta"
        }

        console.log(Plat["BM"])
        expect(Plat["AB"]).toBe("Yogyakarta")
    })

    it('using extendable interface', function() {
        const cust : Customer = {
            name: "Budi",
            age: 20
        }

        const man : Manager = {
            name: "Bowsy",
            age: 35,
            Salary: 25000000
        }

        expect(typeof(man.Salary)).toBe("number")
    })

    it('using interface method', function() {
        const budi: person = {
            name:"Budi",
            sayhello: function(name: string): string {
                return `hello ${name}, my name is ${this.name}`
            } 
        }

        expect(budi.sayhello("rudi")).toBe("hello rudi, my name is Budi")
    })
})