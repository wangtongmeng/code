# 导入模块的第二种写法 from
# 包和模块是不会被重复导入的
# 避免循环导入
# from t.module3 import b,d
from t.module3 import *
print(b)  # 2
print(d)  # 3
print(e)  # name 'e' is not defined 通过all限制住了


# 变量太多换行
""" 
第一种
from t.module3 import b,d,\
c
第二种（推荐）
from t.module3 import (b,d,
c)
"""
