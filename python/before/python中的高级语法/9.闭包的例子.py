def f1():
    a = 10

    def f2():
        a = 20  # 局部变量，定义加赋值，这里没有引用外部的环境变量，所以没有形成闭包
        print(a)
    print(a)
    f2()
    print(a)


f1()
# 10 20 10
