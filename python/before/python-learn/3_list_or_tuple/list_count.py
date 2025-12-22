#coding:utf-8

# count 查询元素在列表或元素中的个数
fruits = ['apple', 'pear', 'orange', 'banana']

print(fruits.count('apple')) # 1

dicts = [
    {'name': 'dog'},
    {'name': 'cat'},
    {'name': 'mouse'},
]

print(dicts.count({'name': 'mouse'})) # 1

fruits_tuple = ('apple', 'pear', 'orange', 'banana')
print(fruits_tuple.count('apple')) # 1