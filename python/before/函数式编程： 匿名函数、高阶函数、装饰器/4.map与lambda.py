list_x = [1, 2, 3]
list_y = [1, 2, 3]

print(list(map(lambda x: x * x, list_x)))  # [1, 4, 9]
# 接收多个参数
print(list(map(lambda x, y: x * x * y, list_x, list_y)))  # [1, 8, 27]
# 接收多个参数时，会以较短的为准
print(list(map(lambda x, y: x * x * y, [1, 2], [1, 2, 3])))  # [1, 8]
print(list(map(lambda x, y: x * x * y, [1, 2, 3], [1, 2])))  # [1, 8]
