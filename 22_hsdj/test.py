def inc(x):
    return x + 1

f = inc

print( inc )
print( f )
print( f(10) )

def adder(a, b):
    return a + b

def caller(c):
    print( c(2, 4) )
    print( c(3, 5) )

caller( adder )

def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)

print("")
print( contains_15( [1,2,3,4,5] ) )
print( contains_15( [13,14,15,16,17] ) )
print( contains_15( range(1, 20) ) )

del outer
#outer(42)

contains_15( range(14, 20) )

def repeat(word):
    def repeater(times):
        return word * times
    return repeater

print("")
r1 = repeat( "hello" )
print( r1(2) )
r2 = repeat( "goodbye" )
print( r2(2) )

"""
def outer():
    x = "foo"
    def inner():
        x = "bar"
    inner()
    return x

print("")
print( outer() )
"""

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print("")
print( outer() )
