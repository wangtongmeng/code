# coding:utf-8

# values(): 返回字典中所有值组成的列表。
my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
print(my_dict.values(), type(my_dict.values()))  # dict_values([1, 2, 3, 4, 5]) <class 'dict_values'>
print(list(my_dict.values()))  # [1, 2, 3, 4, 5]