"""
Task
Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.

def find(array, element):
    for i in range(len(array)):
        if array[i] == element:
            return i;
    return 'Not found'


"""


#mine:
def find(a, e):
    return a.index(e) if e in a else "Not found"


#top solution:
def find(arr, elem):
        return arr.index(elem) if elem in arr else 'Not found'