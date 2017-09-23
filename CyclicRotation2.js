
function solution(A, K) {
    if(A.length===0){
        return A;
    }
    for (var i=1; i<=K;i++){
        A.unshift(A.pop())
    }
    return A;
}
