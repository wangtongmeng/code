list_x = [1, 0, 1, 0, 1]

# <filter object at 0x000001BAF43AB5E0> 集合
print(filter(lambda x: True if x == 1 else False, list_x))
# [1, 1, 1] 转list
print(list(filter(lambda x: True if x == 1 else False, list_x)))
