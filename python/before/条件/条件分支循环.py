from html.entities import codepoint2name


mood = True

# 条件语句
if mood:
    print('go to left')  # 没有{}，通过缩进来表示，如果没有缩进则不是同一个语句
else:
    print('go to right')

a = 1
b = 2
if a > b:  # if 后面跟表达式
    print('go to left')
else:
    print('go to right')


if True:
    pass  # 空语句/占位语句


if False:
    pass

""" 
嵌套 if else
if condition:
    if condition:
        pass
    else:
        pass
else:
    if condition:
        pass
    else:
        pass

"""

# 代码块
# if condition:
#     code1
#     code2
# else:放
#     code1
#     code2



