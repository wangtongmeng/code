def curve_pre():
    a = 25

    def curve(x):
        return a*x*x
    return curve


a = 10

f = curve_pre()
print(f(2))  # 25 * 2 * 2 在定义的地方，向上查找变量
# (<cell at 0x0000025F2A667FD0: int object at 0x0000025F2A1903F0>,)
print(f.__closure__)
print(f.__closure__[0].cell_contents)  # 25

# 闭包 = 函数 + 环境变量（函数定义时候）
