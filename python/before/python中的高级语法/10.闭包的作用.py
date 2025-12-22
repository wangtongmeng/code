# 非闭包的解决方式
origin = 0


def go(step):
    global origin
    new_pos = origin + step
    origin = new_pos
    return new_pos


print(go(2), go(3), go(6))  # 2 5 11 每次累计
