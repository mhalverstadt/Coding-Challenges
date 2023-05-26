"""
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
"""


#mine:
def disemvowel(string_):
    new_string = ""
    vowels = "aeiouAEIOU"
    for letter in string_:
        if not letter in vowels:
            new_string += letter
    return new_string

#top solution
def disemvowel(string):
    return "".join(c for c in string if c.lower() not in "aeiou")