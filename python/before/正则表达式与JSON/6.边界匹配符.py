# 边界匹配

import re

qq = '10000000001'
# 4~8
print(re.findall('^\d{4,8}$', qq))  # [] 判断qq是不是4到8位
print(re.findall('^000', qq))  # ^以什么开头
print(re.findall('000$', qq))  # $以什么结尾，从右向左匹配3位
