def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print("")
print( outer() )

def make_counter():
    x = 0

    def adder():
        nonlocal x
        x += 1

    adder()
    return x

ctr1 = make_counter()
c
