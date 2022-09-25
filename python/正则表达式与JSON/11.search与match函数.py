# match 从左开始匹配，不符合返回None，符合返回第一个结果
# search 搜索字符串，知道匹配到第一个
# match和search都是匹配到第一个就停止了
import re

s = "A123BC234D256E"

print(re.match('\d', s))  # None
r = re.search('\d', s)
print(r)  # <re.Match object; span=(1, 2), match='1'>
print(r.span(), r.group())  # (1, 2) 1
