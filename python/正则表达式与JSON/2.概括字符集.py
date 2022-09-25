

# \d 数字 \D 非数字
# \w 单词字符（[a-zA-Z0-9_]） \W 单词字符
# \s 空白字符 \S 非空白字符
# .  匹配除换行符\n之外其他所有字符

import re
a = 'qwe123'
b = 'aA1 2_&\n\r'

print(re.findall('\d', a))  # ['1', '2', '3']
print(re.findall('\D', a))  # ['q', 'w', 'e']

print(re.findall('\w', b))  # ['a', 'A', '1', '2', '_']
print(re.findall('[a-zA-Z0-9_]', b))  # ['a', 'A', '1', '2', '_']
print(re.findall('\W', b))  # [' ', '&', '\n', '\r']

print(re.findall('\s', b))  # [' ', '\n', '\r']
print(re.findall('\S', b))  # ['a', 'A', '1', '2', '_', '&']


print(re.findall('.', b))  # ['a', 'A', '1', ' ', '2', '_', '&', '\r']
