# 对修改封闭，对扩展开放

import time


def f1():
    print('原函数')
# 方式1


def f2(func):
    print(time.time())
    func()


f2(f1)
# 1664322012.7777312
# 原函数

# 方式2 装饰器 增加内聚


def decorator(func):
    def wrapper():
        print(time.time())
        func()
    return wrapper


f = decorator(f1)  # 返回了函数
f()
# 1664322365.930443
# 原函数


# 方式3 python中装饰器的用法，保持原有调用方式不变
@decorator
def f11():
    print('python装饰器')


f11()  # 1664322530.99649 python装饰器


#  装饰器支持可变参数
def decorator2(func):
    def wrapper(*args):
        print(time.time())
        func(*args)
    return wrapper


@decorator2
def f22(val):
    print('支持可变参数' + val)


@decorator2
def f222(x, y):
    print('支持可变参数' + x + y)


f22('test')
f222('x', 'y')
# 1664323032.1636934
# 支持可变参数test
# 1664323032.1636934
# 支持可变参数xy

# 支持关键字参数


def decorator3(func):
    def wrapper(*args, **kw):
        print(time.time())
        func(*args, ** kw)
    return wrapper


@decorator3
def f3(func_name1, func_name2, **kw):
    print('This is a function named' + func_name1)
    print('This is a function named' + func_name2)
    print(kw)
# 1664323393.6389353
# This is a function namedfun1
# This is a function namedfun2
# {'a': 1, 'b': 2, 'c': '123'}


f3('fun1', 'fun2', a=1, b=2, c='123')
