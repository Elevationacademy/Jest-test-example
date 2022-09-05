const countVowels = require("./count-vowels")
const VOWELS = ["a", "e", "i", "o", "u"]

// test cases
test("should count a vowel", () => {
    let res = countVowels("cat")
    expect(res).toBe(1)
})

test.skip("should count all the vowels", () => {
    let res = countVowels("".join(VOWELS))
    expect(res).toBe(VOWELS.length)
})

test("should count 0 if no vowels exist", () => {
    let res = countVowels("bcklptmn")
    expect(res).toBe(0)
})

test("should ignore numbers", () => {
    let res = countVowels("bckl12132")
    expect(res).toBe(0)
})

test("should ignore numbers", () => {
    let res = countVowels("abckl12132e")
    expect(res).toBe(2)
})

test("should ignore numbers", () => {
    let res = countVowels("abckl12132e")
    expect(res).toBe(2)
})

