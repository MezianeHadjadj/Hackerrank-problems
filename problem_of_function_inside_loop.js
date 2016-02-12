//Problem:

var person1= {name:"person1"};
var person2={name:"person2"};
var person3={name:"person3"};

var persons =  [person1,person2, person3];
var len = persons.length;

for (var i = 0; i < len; i++) {
    persons[i].onclick = function(){
    	console.log("onclick function of element:"+i)
    }
}

persons[1].onclick();

//Based on the above code, when we call onclick function we will always 
//get "onclick function of element: 10" frequently we don't expect that.



//Solution:
var person1= {name:"person1"};
var person2={name:"person2"};
var person3={name:"person3"};

var persons =  [person1,person2, person3];
var len = persons.length;
var click=function(index){
    return function(){
        console.log("onclick function of element: "+index)
    }
}
for (var i = 0; i < len; i++) {
    persons[i].onclick = click(i)
}

persons[1].onclick();
