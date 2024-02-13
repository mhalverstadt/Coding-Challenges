# Create a function that always returns True/true for every item in a given list.
# However, if an element is the word 'flick', switch to always returning the opposite boolean value.

# Examples
# ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

# ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

# ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
# Notes
# "flick" will always be given in lowercase.
# A list may contain multiple flicks.
# Switch the boolean value on the same element as the flick itself.

# mine:
def flick_switch(lst):
    toggle = True
    result = []
    for word in lst: 
        if word != 'flick':
            result.append(toggle)
        else: 
            toggle = not toggle 
            result.append(toggle)
    return result

# top solution:
def flick_switch(lst):
	res, state = [], True
	for i in lst:
		if i == 'flick':
			state = not state
		res.append(state)
	return res


# Test:
print (flick_switch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))