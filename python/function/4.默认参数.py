# 默认参数
# 必须参数在前，默认参数在后

def add(a, b=2, c=3, d=4):
    return a+b+c+d


add(1)
add(1, 2, 3, 4)
add(1, d=4, c=3, b=2)
