# coding:utf-8

# clear 清空字典数据
my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
my_dict.clear()
print(my_dict)  # {}

# pop 删除字典中指定的 key，并将其结果返回，如果key 不存在则报错
my_dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
pop_value = my_dict1.pop('d')
print(pop_value, my_dict1)  # 4 {'a': 1, 'b': 2, 'c': 3, 'e': 5}

# del
my_dict2 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
del my_dict2['c']
print(my_dict2)  # {'a': 1, 'b': 2, 'd': 4, 'e': 5}
# 删除整个字典
del my_dict2
# print(my_dict2)  # NameError: name 'my_dict2' is not defined.
