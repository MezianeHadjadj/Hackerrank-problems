# you can write to stdout for debugging purposes, e.g.
# print "this is a debug message"

def solution(N):
    # write your code in Python 2.7
    my_bin=bin(N)
    my_bin=my_bin[2:]
    #my_bin="1001000110"
    boo=False
    val=0
    best=0
    for i in xrange(len(my_bin)):
        ele=my_bin[i]
        if ele=='1' and not boo:
            boo=True
            continue
        elif boo and ele=='0':
            val+=1
        elif ele=='1' and boo:
            if val>best:
                best=val
            val=0
    return best
    pass