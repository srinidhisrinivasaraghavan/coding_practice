/* 
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # # 
*/

function createBoard(num) {
    var str = "";
    for(var i = 0; i < num; i++) {
        for(var j = 0; j < num; j++) {
            if(i%2 === 0 && j%2 ===0){
                str+=" "
            } else if(i%2 === 0 && j%2 ===1){
                str+="#"
            } else if(i%2 === 1 && j%2 ===0){
                str+="#"
            } else if(i%2 === 1 && j%2 ===1){
                str+=" "
            }
            //console.log(str);
        }
        str+="\n";
    }
    console.log(str);
}

createBoard(10);