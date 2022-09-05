let catsModel = require('./cats-model')

function filterOldCats(){
    // getData
    let cats = catsModel.getCats()
    console.log("cats in filter", cats);
    if (cats === undefined){
        return []
    }
    let biggerThan5 = cats.filter(c => c > 5)
    return biggerThan5
}

module.exports = { filterOldCats }