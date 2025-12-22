'''
参数
1.必须参数
2.关键字参数
定义上没区别，调用上有区别
'''


def add(x, y):
    result = x+y
    return result


c = add(1, 2)
# 不用关心顺序，提高了代码的可读性
d = add(y=2, x=1)
