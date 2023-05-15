"""
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
"""

#mine:
def number_to_string(num):
    return str(num)

#One of the top solutions:

number_to_string = str

"""
explanation
str is already a reserved keyword which is in-fact a function, therefore you can pass arguments to it. What is happening is it is making number_to_string equal to the str function. This means is the technically the same as the str function and any arguments that are passed to number_to_string are passed through the str function. There is no point having a function within a function (an embedded function), so you can access the function directly by simply stating it rather than wrapping it up in a lambda or a def function.

It's the same as:

def number_to_string(x):
  return str(x)

or 

number_to_string = lambda x: str(x)
"""