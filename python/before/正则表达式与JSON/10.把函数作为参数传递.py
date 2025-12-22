import re

s = "A123BC234D256E"


def convert(value):
    matched = value.group()
    if int(matched) >= 6:
        return '9'
    else:
        return '0'


# 大于等于6的数字替换成9，反之为0
print(re.sub('\d', convert, s))  # A000BC000D009E
