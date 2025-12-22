# coding:utf-8

# extend
# 用法 list.extend(iterable) 参数 iterable 代表列表或元组，无返回值

student = ['1', '2']
new_student = ('3', '4')
print(id(student))


student.extend(new_student)
print(student, new_student) # ['1', '2', '3', '4'] ['3', '4']
print(id(student))
"""
4341664128
['1', '2', '3', '4'] ['3', '4']
4341664128
"""

# 字符串通过 extends 会打算
test = []
test.extend('abcd')
print(test) # ['a', 'b', 'c', 'd']

# 字典 通过 extends => key 的列表
test2 = []
test2.extend({'a': 1, 'b': 2})
print(test2) # ['a', 'b']
