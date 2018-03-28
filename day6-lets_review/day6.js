function processData(input) {
    var array3 = [];
    var a = '';
    var b = '';
    //Enter your code here
    var array1 = input.split('\n');
    // console.log(array1);
    
    for(var i = 1; i < array1.length; i++){
        // console.log(array[i]);
        for(var j = 0; j < array1[i].length; j++){
            // console.log(array1[i][j]);
            if(j % 2 === 0) {
                a += array1[i][j];
            } else {
                b += array1[i][j];
            }
        }
    }
    console.log(a);

    // var array2 = array1.splice(1,2);
    // var hacker = array2[0];
    // var rank = array2[1];
    // console.log(hacker.length);
    // console.log(hacker + '\n' + rank);
    // console.log(hacker[0]+hacker[2]+hacker[4] + " " + hacker[1]+hacker[3]+hacker[5] + "\n" + rank[0] + rank[2] + " " + rank[1] + rank[3]);
    // for(var i = 0; i < hacker.length; i = i+2){
    //     console.log(hacker[i]);
    // }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});