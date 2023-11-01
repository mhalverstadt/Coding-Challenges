# Write a method, that will get an integer array as parameter and will process every number from this array

# Return a new array with processing every number of the input-array like this
# If the number has an integer square root, take this, otherwise square the number
# Example
# [4,3,9,7,2,1] -> [2,9,3,49,4,1]

# Notes
# The input array will always contain only positive numbers, and will never be empty or null.


# Mine:
import math

def check_square_root(n):
    return int(math.sqrt(n)) if math.sqrt(n).is_integer() else n**2

def square_or_square_root(arr):
    return list(map(check_square_root, arr))

print(square_or_square_root([4, 3, 9, 7, 2, 1]))


# Top Solution: 
def square_or_square_root(arr):
    result = []
    for x in arr:
        root = x**0.5
        if root.is_integer():
            result.append(root)
        else:
            result.append(x*x)
    return result


#other: 
def square_or_square_root(arr):
    return [n*n if n**0.5 % 1 else n**0.5 for n in arr]