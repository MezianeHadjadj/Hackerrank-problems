#!/usr/bin/py
# Head ends here
def stringSimilarity(a):
    s=a
    answer = 0
    length = len(s)
    z_array = [0] * length
    right = 0
    left = 0
    max_sum = length
    for i in xrange(1, length):
        if i <= right:
            z_array[i] = min(right - i + 1, z_array[i - left])
        while i + z_array[i] < length and s[z_array[i]] == s[i + z_array[i]]:
            z_array[i] += 1
        if i + z_array[i] - 1 > right:
            left = i
            right = i + z_array[i] - 1
        max_sum += z_array[i]
    return max_sum
# Tail starts here
if __name__ == '__main__':
    t = input()
    for i in range(0,t):
        a=raw_input()
        print stringSimilarity(a)