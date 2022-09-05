const calc = require("./calc")
let getData = calc.getData
const filterData = calc.filterData


test("filterData should filter numbers  greater than 5", () => {
    getData = jest.fn()
    getData.mockReturnValueOnce([16,3,-2,44,76]).mockReturnValueOnce([6])

    let filtered = filterData()
    expect(filtered).toEqual([16,44,76])
    
    filtered = filterData()
    expect(filtered).toEqual([6])
})

test.skip("filterData should filter numbers  greater than 5", () => {
    getData.mockReturnValue(undefined)
    let filtered = filterData()
    expect(filtered).toEqual([])
})