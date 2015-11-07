function processData(input) {
    //Enter your code here
    input=input.split("\n")
    var input1=input[0].split(" ")
    var input2=input[1].split(" ")
    var length=parseInt(input1[0])
    var k= parseInt(input1[1])
    var nbr_pairs=0;
    for (var i=0;i<length;i++){
        for (var j=0;j<length;j++){
            if(parseInt(input2[j]) - parseInt(input2[i])===k ){
                nbr_pairs+=1;
            }
        }
    }
    console.log(nbr_pairs)
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
