// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var map = new Map();
    for (i in A){
        if( map[A[i]] === 1) {
            delete map[A[i]];
        }else{
            map[A[i]]= 1;           
        }
    }
    for (j in map){
        return JSON.parse(j);
    }
}

