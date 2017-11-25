/*
Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.
*/

function flatten(array) {
    var resultArr = [];
    array.forEach(function(innerArray){
        innerArray.forEach(function(ele){
            resultArr.push(ele);
        });
    });

    return resultArr;
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]