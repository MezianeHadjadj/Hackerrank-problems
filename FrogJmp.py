# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(X, Y, D):
    # write your code in Python 2.7
    S=(Y-X)//D
    if (Y-X)%D==0:
        return S
    else:
        return S+1
    pass