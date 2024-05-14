# coding:utf-8

# isdisjoint 判断两个集合是否包含相同的元素，如果没有返回 True，否则返回 False

set1 = {1, 2, 3}
set2 = {4, 5, 6}
set3 = {3, 4, 5}

print(set1.isdisjoint(set2))  # True，因为set1和set2没有共同元素
print(set1.isdisjoint(set3))  # False，因为set1和set3有共同元素（3）