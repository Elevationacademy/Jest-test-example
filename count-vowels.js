function count_vowels(str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(str.charAt(i)) !== -1) {
            counter++;
        }
    }
    return counter;
}

module.exports = count_vowels

