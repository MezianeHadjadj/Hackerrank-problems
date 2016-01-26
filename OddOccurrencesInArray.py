def solution(A):
    # write your code in Python 2.7
    N=len(A)
    i=0
    A.sort()
    if N==1:
        return A[0]
    while i<=N//2:
        
        if A[i]!=A[i+1]:
            return A[i]
        elif A[N-i-1]!=A[N-i-2]:
                return A[N-i-1]
        i+=2
        
    pass