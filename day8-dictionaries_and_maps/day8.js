function processData(input) {
    //Enter your code here
    var splitInput = input.split('\n');
    var phoneBook = {};
    var nameNum = [];
    var contactNames = [];
    
    for(var i = 1; i < splitInput.length; i++){
        var patt = new RegExp(/\d/g);
        var res = patt.test(splitInput[i]);
        // console.log(res);
        if(res){
            nameNum = splitInput[i].split(' ');
            // console.log(nameNum);
            // console.log(phoneBook.push(nameNum));
            var name = nameNum[0];
            var num = nameNum[1];
            // console.log(name);
            // console.log(num);
            phoneBook[name]=[num];
            // console.log(phoneBook);
            // var contact = name + "=" + num;
            // console.log(contact);
        } else if (!(res)) {
            contactNames.push(splitInput[i]);
            // console.log(contactNames);
        }
    }
    	for (i = 0; i < contactNames.length; i++) {
            if (phoneBook[contactNames[i]]) {
			console.log(contactNames[i] + "=" + phoneBook[contactNames[i]]);
            } else {
                console.log('Not found');
            }
        }
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