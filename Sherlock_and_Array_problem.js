function processData(input) {
    //Enter your code here
    input=input.split('\n')
    len_ligne=true;
    var list_inputs=[];
    for(var i=1; i<=input.length;i++){
  
               if(!len_ligne){
                 list_inputs.push(input[i])
                 len_ligne=true
               }else{
                   len_ligne=false;
               }
         }
    
          for (index in list_inputs){
             //convert a string to a list of ints
             ele=list_inputs[index].split(" ")
             for(var i=0; i<ele.length; i++) { ele[i] = parseInt(ele[i], 10); } 
              
             
              for (var j=0; j<=ele.length;j++){
                  var left=0;
                  var right=0;
                      for(var k=0; k<=ele.length-1;k++){
                          
                          if(k<j){
                              left=left+ele[k]
                          }else{ 
                              if(k>j){
                                  right=right+ele[k]
                              } 
                          } 
                         
                       }
              
             
               if(left==right){
                   console.log("YES")
                   break
               }else{
                   if(j==ele.length){
                   console.log("NO")
                   }
               }
            
               left=0;
               right=0;
           }
          } 
           //console.log(input[i])
           len_ligne=true;
        
        
   
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
