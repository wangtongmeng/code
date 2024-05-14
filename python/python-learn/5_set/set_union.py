# coding:utf-8

# *union(others): 返回一个包含当前集合和其他集合中所有元素的新集合。
set1 = {1, 2, 3}
set2 = {3, 4, 5}
set3 = {6}
union_set = set1.union(set2, set3)
print(union_set)  # {1, 2, 3, 4, 5, 6}