# Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


# Mine:
def merge_arrays(first, second):
  new_set = set(first + second)
  return sorted(list(new_set))

# Top Solution:
def merge_arrays(a, b): 
    return sorted(set(a + b))