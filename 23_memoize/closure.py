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

        if (x) in memo:
            return memo.get(x)

        """
        if (x - 1) in memo == False:
            memo[x - 1] = fib(x - 1)
        if (x - 2) in memo == False:
            memo[x - 2] = fib(x - 2)

        memo[x] = memo.get(x - 1) + memo.get(x - 2)
        """
        memo[x] = fib(x)
        return memo.get(x)
            
        
    return helper

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

something = memoize(fib)
print( something(20) )
print( something(20) )
