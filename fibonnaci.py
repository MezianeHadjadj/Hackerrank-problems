import time
from time import gmtime, strftime


def fib(n):
    #begin= int(round(time.time() * 1000000))
    fibs = [0, 1]
    for i in range(2, n+1):
        inter=fibs[0]
        fibs[0]=fibs[1]
        fibs[1]=inter+fibs[1]
        #fibs.append(fibs[-1] + fibs[-2])
    #print (int(round(time.time() * 1000000)) - begin)*0.001
    return fibs[-1]

def fib2(n, computed = {0: 0, 1: 1}):
    if n not in computed:
        computed[n] = fib2(n-1, computed) + fib2(n-2, computed)
    return computed[n]

def fib3(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a+b
    return a

def fib4(n):
    if n == 0:
        return (0, 1)
    else:
        a, b = _fib(n // 2)
        c = a * (b * 2 - a)
        d = a * a + b * b
        if n % 2 == 0:
            return (c, d)
        else:
            return (d, c + d)

fib4(N)


