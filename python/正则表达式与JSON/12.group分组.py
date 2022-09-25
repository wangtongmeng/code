import re

s = 'life is short, i use python, i love python'
# 取出 life和python之间的字符，以及python和python之间的字符
r = re.search('life(.*)python(.*)python', s)

print(r.group(0))  # life is short, i use python, i love python 第一个是匹配的字符
print(r.group(1))  # is short, i use 之后的是分组的结果
print(r.group(2))  # , i love

print(r.groups())  # (' is short, i use ', ', i love ') 分组的结果在元组里


print(re.findall('life(.*)python(.*)python', s))
# [(' is short, i use ', ', i love ')]
