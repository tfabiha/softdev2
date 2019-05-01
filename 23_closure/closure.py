import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return "<h1>" + txt + "</h1>"
    return inner

# equiv to greet = makeHTMLheading(greet)
@make_HTML_heading
def greet():
    greetings = ["Hello", "Welcome", "AYO!", "Hola", "Bonjour", "Wordup"]
    return random.choice(greetings)

# greet_heading = make_HTML_heading( greet )
# print( greet_heading() )

print( greet() )
print( greet() )

def memoize(f):
    memo = {}
    def helper(x):
        nonlocal memo

        if (x - 1) in memo:
            memo[x] = memo[x-1] * memo[x-2]
        else:
        
    return helper

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print( fib(40) )
