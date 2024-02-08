# Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

# Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

# Make sure to round off the result to two decimal points.

# Some useful associations relevant to this kata:

# 1 Imperial Gallon = 4.54609188 litres
# 1 Mile = 1.609344 kilometres

# mine:
def converter(mpg):
    lpk = (mpg * 0.3540060435382138)
    return round(lpk, 2)

# top: 
def converter(mpg):
    return round(mpg / 4.54609188 * 1.609344    , 2)