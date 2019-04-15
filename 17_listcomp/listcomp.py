# T Fabiha
# SoftDev2 pd7
# K#17: PPFTLCW
# 2019-04-15

#1. ['00', '22', '44', '66', '88']
#a.
a1 = []
for i in range(5):
    a1.append( str(i*2)*2 )

print("1. the loopy way")
print(a1)

print("")

#b.
print("1. the listcompy way")
print( [ str(i*2) * 2 for i in range(5) ] )

print("")

#====================================================

#2. [7, 17, 27, 37, 47]
#a.
a2 = []
for i in range(5):
    a2.append( i*10 + 7 )

print("2. the loopy way")
print(a2)

print("")

#b.
print("2. the listcompy way")
print( [ i*10 + 7 for i in range(5) ] )

print("")

#====================================================

#3. [0, 0, 0, 0, 1, 2, 0, 2, 4]
#a.
a3 = []
for i in range(3):
    for j in range(3):
        a3.append(i*j)
        
print("3. the loopy way")
print(a3)

print("")

#b.
print("3. the litcompy way")
print( [ i * j for i in range(3) for j in range(3) ] )

print("")

#====================================================

#4. Composites on range [0, 100], in ascending order
#a.
a4 = []
for i in range(101):
    for j in range(2, 101):
        if i % j == 0 and i != j:
            a4.append(i)
            break

print("4. the loopy way")
print(a4)

print("")

#b.
print("4. the listcompy way")
print( list(set( i for i in range(101) for j in range(2, 101) if i % j == 0 and i != j )) )

print("")
#====================================================

#5. Primes on range [0, 100], in ascending order
#a.
a5 = []
for i in range(101):
    if i not in a4:
        a5.append(i)

print("5. the loopy way")
print(a5)

print("")

#b.
print("5. the list compy way")
print( [ i for i in range(101) if i not in a4 ] )

print("")

#====================================================

#6. All divisers of a number, listed in ascending order
#a.
def loopy6(n):
    a6 = []
    for i in range(1, n+1):
        if n % i == 0:
            a6.append(i)

    print(a6)

print("6. the loopy way")
loopy6(20)

print("")

#b.
def listcomp6(n):
    print( [ i for i in range(1, n+1) if n % i == 0 ] )

print("6. the listcompy way")
listcomp6(20)

print("")
    
#====================================================

#7. Transpose a matrix. Turn row into columns and vice-versa
#a.
def loopy7(mat):
    a7 = []
    for i in range(len(mat[0])):
        temp = []
        for j in range(len(mat)):
            temp.append( mat[j][i] )
        a7.append(temp)

    print(a7)
    
print("7. the loopy way")
loopy7([[0, 1, 2], [3, 4, 5], [6, 7, 8]])

print("")

#b.
def listcompy7(mat):
    print( [ [mat[j][i] for j in range(len(mat)) ] for i in range(len(mat[0])) ] )

print("7. listcompy way")
listcompy7([[0, 1, 2], [3, 4, 5], [6, 7, 8]])

print("")
