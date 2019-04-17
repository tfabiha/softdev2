from functools import reduce

#read Grimm's Fairy Tails
fd = open("tales.txt","r")
lines = fd.read()
lines = " ".join( lines.split("--") )
lines = " ".join( lines.split("\n") )
lines = " ".join( lines.split("\'") )

words = lines.split(" ")
words = [ x.strip( ",.?/!~#$%^&*(){}[];:\'\"" ) for x in words ]

#print( words )

# Find the frequency of a single word
def find_1( word ):
    count_1 = [ 1 for x in words if x == word ]

    return reduce( (lambda x, y: x + y), count_1 )

print( find_1( "fox" ) )
print( find_1( "to" ) )

# Find the total frequency of a group of words
def find_mult( li ):
    count_mult = [ 1 for x in words if x in li ]

    return reduce( (lambda x, y: x + y), count_mult )

print( find_mult( ["fox", "to"] ) )

# Find the most frequently occurring word
def findmost():
    counts = [ ( x, find_1(x) ) for x in words ]

    return reduce( (lambda x, y: x if x[1] > y[1] else y), counts )
print( findmost() )
