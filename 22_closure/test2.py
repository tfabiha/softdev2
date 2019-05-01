# T Fabiha
# SoftDev2 pd7
# K22: Closure
# 2019-05-01

print("")

def repeat(word):
    def repeater(times):
        return word * times
    return repeater

print("REPEATER")
r1 = repeat( "hello" )
print( r1(2) )
r2 = repeat( "goodbye" )
print( r2(2) )
print( repeat("cool")(3) )

print("")

def make_counter():
    x = 0

    def adder():
        nonlocal x
        x += 1
        print( x )
        return x

    return adder

print("MAKE COUNTER")
ctr1 = make_counter()
print( "first counter increment twice" )
ctr1()
ctr1()

ctr2 = make_counter()
print( "second counter increment once" )
ctr2()
print( "first counter increment once" )
ctr1()
print( "second counter increment once" )
ctr2()
print("")

def make_counter_accessor():
    x = 0

    def increment():
        nonlocal x
        x += 1
        print( x )
        return x

    def modifier():
        nonlocal x
        print( x )
        return x
    
    return (increment, modifier)

print( "MAKE COUNTER ACCESSOR" )
counter = make_counter_accessor()
print( "third counter increment three times" )
counter[0]()
counter[0]()
counter[0]()
print( "access third counter twice to see what it is" )
counter[1]()
counter[1]()
