function tribonacci(signature,n){
  return tribonacciResult(signature, n-3, signature);
}

function tribonacciResult(signature, n, result) {

    console.log(signature, result);
    if(n===0) {
        return result;
    } 

    var sum = signature.reduce((sum, current)=>sum+=current);
    return tribonacciResult([signature[1], signature[2], sum], n-1, result.concat(sum));
}

console.log(tribonacci([1,1,1],10));
//[1,1,1,3,5,9,17,31,57,105]))