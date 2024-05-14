# coding:utf-8

# copy 复制字典 浅拷贝
old_dict = {'a': 1, 'b': 2, 'c': {'d': 3}}
new_dict = old_dict.copy()
print(old_dict, new_dict) # {'a': 1, 'b': 2, 'c': {'d': 3}} {'a': 1, 'b': 2, 'c': {'d': 3}}
print(id(old_dict), id(new_dict))  # 4373592704 4373759232
print(id(old_dict['c']), id(new_dict['c']))  # 4373643200 4373643200