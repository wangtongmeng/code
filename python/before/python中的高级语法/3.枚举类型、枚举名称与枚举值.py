from enum import Enum


class VIP(Enum):
    YELLOW = 1
    GREEN = 2
    BLACK = 3
    RED = 4


print(VIP.GREEN, type(VIP.GREEN))  # VIP.GREEN <enum 'VIP'> 枚举类型
print(VIP.GREEN.name, type(VIP.GREEN.name))  # GREEN <class 'str'> 枚举名称
print(VIP.GREEN.value, type(VIP.GREEN.value))  # 2 <class 'int'> 枚举值

# 遍历枚举
for v in VIP:
    # VIP.YELLOW <enum 'VIP'>
    # VIP.GREEN <enum 'VIP'>
    # VIP.BLACK <enum 'VIP'>
    # VIP.RED <enum 'VIP'>
