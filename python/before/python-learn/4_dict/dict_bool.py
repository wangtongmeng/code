# coding:utf-8

"""
字符串，数字，列表，元组，字典，空类型 与 布尔值的关系总结

数据类型与布尔值的关系
- 每一种数据类型，自身的值都有表示 True 与 False
- not 对于一切结果取反
"""

a_1 = 1
a_2 = 0
print(bool(a_1))  # True
print(bool(a_2))  # False
print(bool(not a_1))  # False
print(bool(not a_2))  # True

b_1 = '1'
b_2 = ''
print('-------')
print(bool(b_1))  # True
print(bool(b_2))  # False
print(bool(not b_1))  # False
print(bool(not b_2))  # True

c_1 = True
c_2 = False
print('-------')
print(bool(c_1))  # True
print(bool(c_2))  # False
print(bool(not c_1))  # False
print(bool(not c_2))  # True