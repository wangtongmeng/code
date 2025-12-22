# coding:utf-8


info = 'hello lisih   '

# 不填参数，默认去掉两边的空格
print('.' + info.strip() + '.') # .hello lisih.
# 填了参数，去掉两边对应的参数
print('.' + info.strip('h') + '.') #.ello lisih   .

# 组合使用
print('.' + info.strip().strip('h') + '.') # .ello lisi.

'''
拓展
lstrip 仅去掉字符串开头的指定元素或空格
rstrip 仅去掉字符串结尾的指定元素或空格
'''