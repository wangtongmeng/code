# coding:utf-8

my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
print(my_dict.keys() , type(my_dict.keys())) # dict_keys(['a', 'b', 'c', 'd', 'e']) <class 'dict_keys'> 不具备列表的所有功能
key_list = list(my_dict.keys()) # 转换成 列表
print(key_list) # ['a', 'b', 'c', 'd', 'e']