# coding:utf-8

#  *difference(others): 返回一个包含当前集合中但不在其他集合中的元素的新集合。 差集
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(type(set1), type(set2))  # <class 'set'> <class 'set'>
difference_set = set1.difference(set2)
print(difference_set, type(difference_set))  # {1, 2} <class 'set'>