from enum import Enum


class VIP(Enum):
    YELLOW = 1
    GREEN = 2
    YELLO_ALIAS = 1


# 数值相同，会变成别名
print(VIP.YELLO_ALIAS)  # VIP.YELLOW

# 遍历会过滤掉别名
for v in VIP:
    print(v)
# VIP.YELLOW
# VIP.YELLOW
# VIP.GREEN

# 可以通过__members__打印别名
for v in VIP.__members__:
    print(v)
# YELLOW
# GREEN
# YELLO_ALIAS
for v in VIP.__members__.items():
    print(v)
# ('YELLOW', <VIP.YELLOW: 1>)
# ('GREEN', <VIP.GREEN: 2>)
# ('YELLO_ALIAS', <VIP.YELLOW: 1>)
