import string

def index(s):
    return string.lowercase.index(s)
def solution(S):
    R=S[::-1]
    for i in xrange(1,len(S)):
        if abs(index(S[i])-index(S[i-1])) != abs(index(R[i])-index(R[i-1])):
            return "Not Funny"
    return "Funny"
                   

if __name__ == '__main__':
    t = input()
    for i in xrange(t):
        print (solution(raw_input()))