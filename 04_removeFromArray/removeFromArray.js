const removeFromArray = function(myArray, ...argN) {    
    for (const arg of argN) {
        if (myArray.indexOf(arg) < 0) {
            continue;
        } else {
            myArray.splice(myArray.indexOf(arg), 1);
        }
    }

    return myArray;
}

// Do not edit below this line
module.exports = removeFromArray;
