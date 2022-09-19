'''
# 函数
参数可以不写
如果没有返回值，则为None
'''

# 定义一个函数


def sum(a, b):
    return a+b


print(sum(1, 2))

# 返回多个值


def fun1(a, b):
    result1 = a+1
    result2 = b+1
    return result1, result2


result1, result2 = fun1(1, 2)  # 序列解包
print(type(fun1(1, 2)))  # <class 'tuple'> 多结果返回类型是元组
print(result1, result2)  # 2 3
