function processData(input) {
    //Enter your code here
    input=input.split("\n");
    for(n=0; n<parseInt(input[0]);n++){      
        M=parseInt(input[n*3+1]);
        N=parseInt(input[n*3+2]);
        Ci=input[n*3+3].split(" ")
        
        for(var i=0; i<Ci.length; i++) { Ci[i] = parseInt(Ci[i], 10); }
        for(var j=1; j<=Ci.length;j++){
            for(var k=1; k<=Ci.length;k++){
                if(Ci[j-1]+Ci[k-1]===M){                    
                    if(j<k){
                        console.log(j+" "+k)
                      j=Ci.length+1
                        break
                        
                        
                    }else{
                        if(j!=k){
                        console.log(k+" "+j)
                        j=Ci.length+1
                        break
                        
                        }
                    }
                }
            }
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
