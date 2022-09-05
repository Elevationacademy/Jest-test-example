let catsModel = require("./cats-model")
const cats = require("./cats")
const filterOldCats = cats.filterOldCats


test("filterData should filter numbers  greater than 5", () => {
    catsModel.getCats = jest.fn()
        .mockReturnValueOnce([16, 3, -2, 44, 76])
        .mockReturnValueOnce([6])

    let filtered = filterOldCats()
    expect(filtered).toEqual([16,44,76])

    filtered = filterOldCats()
    expect(filtered).toEqual([6])
})

test("filterData should filter numbers  greater than 5", () => {
    catsModel.getCats.mockReturnValue(undefined)
    let filtered = filterOldCats()
    expect(filtered).toEqual([])
})