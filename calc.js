
const add1 = function (x) {
    return x + 1
}

const isBiggerThan5 = function (x) {
    return x > 5;
}

class PrimeNumbers {
    constructor() {
        this.primes = []
    }

    addPrime(n) {
        if (this.isPrime(n)) {
            this.primes.push(n)
        }
    }

    isPrime(n) {
        if (n == 2 || n == 3)
            return true
        else if (n == 1 || n % 2 === 0)
            return false
        for (let i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0)
                return false
        }
        return true
    }
}

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

function getData(){
    //should call API
}

function filterData(){
    // getData
    let items = getData()
    if (items === undefined){
        return []
    }
    let biggerThan5 = items.filter(x => x > 5)
    return biggerThan5
}

module.exports = { add1, isBiggerThan5, PrimeNumbers, forEach, getData, filterData }