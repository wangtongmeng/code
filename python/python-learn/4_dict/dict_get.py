# coding:utf-8

# [] 的获取方法

# 通过[]获取
my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': None}
name = my_dict['a']
print(name)  # 1

# get 用法 4_dict.get(key, default=None)
print(my_dict.get('a'))  # 1

"""
[] 和 get 的区别
[] 如果获取的 key 不存在，则直接报错
get 如果获取的 key 不存在，则返回默认值 （推荐）
"""

# 只要字典中有key 就能够取出来，get也不会使用默认值
print(my_dict['e'], my_dict.get('e', 'test')) # None None