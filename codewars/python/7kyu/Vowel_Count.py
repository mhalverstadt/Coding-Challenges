def get_count(sentence):
    count = 0
    vowels = ["a", "e","i", "o", "u"]
    for letter in sentence:
        if letter.lower() in vowels:
            count += 1
    return count

