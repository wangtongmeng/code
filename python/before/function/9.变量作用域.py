c = 10  # 全局变量


def fun1():
    c = 50  # 局部变量
    print(c)  # 50


fun1()
print(c)  # 10


def fun2():
    c = 50
    a = ''
    for i in range(0, 9):
        a = 'a'
        c += 1
    print(c)  # 59
    print(a)  # a for while循环不会形成块级作用域


fun2()
