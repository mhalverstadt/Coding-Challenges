# You get an array of numbers, return the sum of all of the positives ones.
# Example [1,-4,7,12] => 1 + 7 + 12 = 20
# Note: if there is nothing to sum, the sum is default to 0.


# Mine: 
def positive_sum(arr):
  return sum([n for n in arr if n > 0])

# Here is one using filter:
def positive_sum(arr):
    return sum(filter(lambda x: x > 0,arr))

print(positive_sum([1,2,3,-100]))
print(positive_sum([-1,-2,-100]))
print(positive_sum([]))