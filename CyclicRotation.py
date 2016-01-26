# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(A, K):
    # write your code in Python 2.7
    N=len(A)
    if K>N and N!=0:
        K=K%N


    
    return A[N-K:]+A[:N-K]
    pass