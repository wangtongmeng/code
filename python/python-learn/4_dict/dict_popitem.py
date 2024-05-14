# coding:utf-8

# popitem(): 删除并返回字典末尾的键值对。如果字典为空，则抛出 KeyError 异常。
my_dict = {'a': 1, 'b': 2}
print(my_dict.popitem())  # ('b', 2) 元组

key, value = my_dict.popitem()
print(key, value)  # a 1

"""
注意事项
如果字典为空，则直接报错
"""


