# 定义枚举，就是类下面的一组值
# 标签尽量大写
# 重要的是标签，而不是值
# 值不能相同
from enum import Enum


class VIP(Enum):
    YELLOW = 1
    GREEN = 2
    BLACK = 3
    RED = 4


print(VIP.YELLOW)  # VIP.YELLOW
