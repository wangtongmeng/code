# 可变参数会生成一个元组
def fun1(*param):
    print(param)
    print(type(param))


fun1(1, 2, 3, 4)
# (1, 2, 3, 4)
# <class 'tuple'>


# 也可以直接传入一个元组，不用可变参数
def fun2(param):
    print(param)


fun2((1, 2, 3))  # (1, 2, 3)


# 不要给可变传参再传元组了，会生成一个二维元组
def fun3(*param):
    print(param)


fun3((1, 2, 3))  # ((1, 2, 3),)


# 和其他参数混用，尽量少用
def fun4(a, *b, c=3):
    print(a)
    print(b)
    print(c)


fun4(1, 2, 3, 4, 1, c=234324)
# 1
# (2, 3, 4, 1)
# 234324
