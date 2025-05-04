const palindromes = function (word) {
    const re = /[a-zA-Z1-9]/
    word = word.toLowerCase()
    const backwards = word.split('').reverse().filter(letter => re.test(letter)).join('')
    const forwards = word.split('').filter(letter => re.test(letter)).join('')
    return forwards === backwards
};

// Do not edit below this line
module.exports = palindromes;
