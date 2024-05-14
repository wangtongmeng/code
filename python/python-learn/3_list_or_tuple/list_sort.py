# coding:utf-8


# clear 清空列表
target = [1, 2, 3]
print(id(target))
target.clear()
print(id(target), target, len(target))

"""
4365044096
4299835776 [] 0


相比于直接 = [] 少了垃圾回收的过程，性能更好，地址也不会变
"""

