# coding:utf-8

# 位置是从左到右开始，从0开始

info = 'mu name is lisi'
print(info.find('e')) # 6
print(info.index('i')) # 8

# 不存在的情况
print(info.find('sfsfsdf')) # -1
print(info.index('sdfsdf')) # 报错 ValueError: substring not found

'''
find 和 index 的区别

find找不到元素，会返回 -1
index找不到元素，会导致程序报错

所以推荐使用 find
'''