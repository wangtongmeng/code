# 普通写法
a = 1
b = 2
c = 3
# 简洁写法
a, b, c = 1, 2, 3

d = 1, 2, 3
print(type(d))  # <class 'tuple'>
a, b, c = d
print(a, b, c)  # 1 2 3


# 如果值一样
a = b = c = 1
print(a, b, c)  # 1 1 1
