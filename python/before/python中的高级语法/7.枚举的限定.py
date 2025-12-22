from enum import Enum
from enum import IntEnum, unique


@unique  # 通过@unique装饰器，可以使枚举的值不重复
class VIP(IntEnum):  # 通过继承IntEnum，可保证枚举类型都是数字
    YELLOW = 1
    # GREEN = 1  # ValueError: duplicate values found in <enum 'VIP'>: GREEN -> YELLOW
    # GREEN = 'str'  # ValueError: invalid literal for int() with base 10: 'str'
    GREEN = 2
