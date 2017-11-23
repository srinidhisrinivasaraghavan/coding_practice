function kungfoo(input) {
    var arr1 = input[0];
    var arr2 = input[1];

    if(arr1.length > arr2.length) {
        arr1 = input[1];
        arr2 = input[0];
    }

    var output = [];

    for(vari=0;i<arr1;i++){
        if(arr2.indexOf(arr1[i]) > -1 && output.indexOf(arr1[i]) < 0) {
            output.push(arr1[i]);
        }
    }
    
    
    
    
    return output;
}