import re

a = 'salk23test'

# 1. 普通字符和元字符
# 普通字符，写死的
print(re.findall('test', a))  # ['test']

# 元字符 \d 就是元字符，有很多
print(re.findall('\d', a))  # ['2', '3']

a1 = 'abc, acc, adc, aec, afc, ahc'

# 2. 字符集 通过[]找出一组

print(re.findall('a[df]c', a))  # 找出adc或afc
print(re.findall('^a[df]c', a))  # 取反 找出不是adc或afc的
print(re.findall('a[b-e]c', a))  # 连续字符 找出ac中间是b到e的
