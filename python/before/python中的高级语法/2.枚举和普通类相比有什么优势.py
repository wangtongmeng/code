# 继承Enum的好处
# 不可变
# 不能有相同值
from enum import Enum


class VIP(Enum):
    YELLOW = 1
    GREEN = 2
    BLACK = 3
    RED = 4


# 其他的方式
yellow = 1
green = 2
a = {'yellow': 1, 'green': 2}


class Common():
    yellow = 1
    green = 2
