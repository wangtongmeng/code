# 闭包的作用 封闭性
# 缺点 内存泄漏
origin = 0


def factory(pos):  # 通过闭包，把累计结果存在了factory作用域中，而不是全局
    def go(step):
        nonlocal pos
        new_pos = pos + step
        pos = new_pos
        return new_pos
    return go


tourist = factory(origin)
print(tourist(2))
print('闭包', tourist.__closure__[0].cell_contents)
print(tourist(3))
print('闭包', tourist.__closure__[0].cell_contents)
print(tourist(5))
print('闭包', tourist.__closure__[0].cell_contents)
# 2
# 闭包 2
# 5
# 闭包 5
# 10
# 闭包 10
