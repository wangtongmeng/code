from enum import Enum


class VIP(Enum):
    YELLOW = 1
    GREEN = 2


# 枚举转换
a = 1
print(VIP(a))  # VIP.YELLOW
