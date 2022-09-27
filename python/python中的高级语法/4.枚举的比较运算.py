# 枚举可以做等值比较，不能大小比较
# 可以做身份比较
from enum import Enum


class VIP(Enum):
    YELLOW = 1
    GREEN = 2


class VIP1(Enum):
    YELLOW = 1
    GREEN = 2


print(VIP.GREEN == VIP.GREEN, VIP.GREEN is VIP.GREEN)  # True True
# print(VIP.GREEN > VIP.GREEN) # TypeError: '>' not supported between instances of 'VIP' and 'VIP'
print(VIP.GREEN == VIP1.GREEN)  # False
print(VIP.GREEN is VIP1.GREEN)  # False

# 数值相等，是别名，遍历不会打印出来，可以通过__members__打印出来
