const repeatString = function(string, num) {
    let out = ''
    if (num>=0){
    for (let i=0;i<num;i++){
        out+=string
    }
}else {
    out = 'ERROR'
}
    return out
};

// Do not edit below this line
module.exports = repeatString;
