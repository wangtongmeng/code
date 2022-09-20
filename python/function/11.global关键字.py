from calendar import c


def demo():
    global c
    c = 2


demo()

print(c)


# 全局变量在整个应用都是可以使用的
'''
import c13
print(c13.c)
'''
