const calc = require("./calc")


// matchers
test("isBiggerThan5 should return false if a number is less than 5", ()=>{
    const res = calc.isBiggerThan5(3)
    expect(res).toBeFalsy()
})

// testing an Object
// test structure
test("addPrime should not add a number if it is not prime", ()=>{
    // test setup
    const primesModule = new calc.PrimeNumbers()
    const initial_length  = primesModule.primes.length
    
    //execution
    primesModule.addPrime(4)
    
    // expect
    expect(primesModule.primes).toHaveLength(initial_length)
})
