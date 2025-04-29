const reverseString = function(string) {
    let out = ''
    let strArr = string.split('')
    for (let i=0;i<string.length;i++){
        out+=strArr.pop()
    }
    return out
};

// Do not edit below this line
module.exports = reverseString;
