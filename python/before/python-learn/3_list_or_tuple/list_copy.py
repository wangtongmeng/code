# coding:utf-8
import copy

# sort 复制列表（新的内存地址） 浅拷贝
old_list = [{'a': 1}, 2, 3, 4, 5, 6, 7, 8, 9]
new_list = old_list.copy()
print(new_list)
print(id(old_list), id(new_list)) # 地址不同
print(id(old_list[0]), id(new_list[0])) # 浅拷贝，里面地址还相同
"""
[1, 2, 3, 4, 5, 6, 7, 8, 9]
4330555776 4330557568
4330913728 4330913728
"""


# 深拷贝
a = [[1, 2], [3, 4]]
b = copy.deepcopy(a)
b[0].append(10)
print(a, b) # [[1, 2], [3, 4]] [[1, 2, 10], [3, 4]]
