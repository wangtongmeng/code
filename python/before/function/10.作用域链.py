c = 1


def fun1():
    c = 2
    print('fun1', c)

    def fun2():
        c = 3
        print('fun2', 3)
    fun2()


fun1()
print('global', c)
# fun1 2
# fun2 3
# global 1
# 本块级作用域没有会向上查找
