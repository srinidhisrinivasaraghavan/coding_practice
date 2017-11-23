function right_array_rotation(arr, rotateBy) {
    var inputArr = arr.slice(0);
    var endElements = inputArr.slice(inputArr.length - rotateBy);

    inputArr.splice(arr.length-rotateBy, rotateBy);
    
    return endElements.reverse().concat(inputArr);
}

console.log(right_array_rotation([1,2,3,4,5,6,7], 2));