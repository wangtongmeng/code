# coding:utf-8

name = 'lisi'
info = 'hello lisi'
_info = '李四 hello'
number_str = '1314'

new_name = name.capitalize()
new_info = info.capitalize()
_new_info = _info.capitalize()
new_number_str = number_str.capitalize()

print(new_name, name)
print(new_info, info)
print(new_number_str, _info)
print(_new_info, number_str)

'''
原来的字符串没有改变
Lisi lisi
Hello lisi hello lisi
1314 李四 hello
李四 hello 1314
'''