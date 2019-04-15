# T Fabiha
# SoftDev2 pd7
# K#18
# 2019-04-16

def quicksort(li, min_place, max_place):

    if min_place >= max_place:
        return

    pivot = min_place

    i = pivot + 1

    while i <= max_place:
    
        if li[pivot] > li[i]:
            x = i
        
            while x > pivot:
                temp = li[x]
                li[x] = li[x-1]
                li[x-1] = temp

                x -= 1

            pivot += 1

        i += 1

    quicksort(li, min_place, pivot - 1)
    quicksort(li, pivot + 1, max_place )

    #print(li)
    
li = [3, 9, 25, 6, 300, 196, 1, 7, 20]
quicksort(li, 0, len(li) - 1)
print(li)
