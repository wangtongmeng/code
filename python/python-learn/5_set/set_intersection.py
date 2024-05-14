# coding:utf-8

# *intersection(others): 返回一个包含当前集合和其他集合中共同元素的新集合。 交集
set1 = {1, 2, 3}
set2 = {3, 4, 5}
intersection_set = set1.intersection(set2)
print(intersection_set)  # {3}


# 也可以传多个
set3 = {1, 2, 3, 4, 5}
set4 = {3, 4, 5, 6, 7}
set5 = {4, 5}
result = set3.intersection(set4, set5)
print(result)  # {4, 5}