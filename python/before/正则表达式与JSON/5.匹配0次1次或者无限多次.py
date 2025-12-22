# 数量词
# * 匹配0词或无限多次
# + 匹配1次或无限多次
# ? 匹配0次或1次

import re

a = 'pytho0python1pythonn2'

print(re.findall('python*', a))  # ['pytho', 'python', 'pythonn']
print(re.findall('python+', a))  # ['python', 'pythonn']
print(re.findall('python?', a))  # ['pytho', 'python', 'python']
