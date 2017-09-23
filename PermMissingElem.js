Find the missing element in a given permutation.

function solution(A) {
    var sum= 0 ;
    var exactSum= 0;
    for (j in A) {
        sum+= A[j]
        exactSum += JSON.parse(j)+1
    }
    exactSum+=A.length+1
    return exactSum-sum
    
}
