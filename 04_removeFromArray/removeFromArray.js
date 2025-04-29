const removeFromArray = function(array, ...args) {
    
     return array.filter(function(item){
        return Array.from(args).indexOf(item) === -1
     })
    
};

// Do not edit below this line
module.exports = removeFromArray;
