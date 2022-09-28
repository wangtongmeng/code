from functools import reduce


from functools import reduce
list_x = [1, 2, 3]

print(reduce(lambda x, y: x+y, list_x))  # 6  ((1+2)+3
print(reduce(lambda x, y: x+y, list_x, 10))  # 16 ((10+1)+2)+33
