# coding:utf-8

'''
用法
    newstr = string.replace(old, new, max)
'''

info = 'hello, lisi lisi'

print(info.replace('lisi', 'wangwu')) # hello, wangwu wangwu
print(info.replace('lisi', 'wangwu', 1)) # hello, wangwu lisi

# 链式操作
print(info.replace('hello', 'byebye').replace('lisi', 'wangwu')) # byebye, wangwu wangwu


# 应用： 敏感词替换 把一些敏感词替换成***


'''
isspace 判断字符串是否是一个由空格组成的字符串
'''
print(' '.isspace(), 'sdfs sfs'.isspace()) # True False
'''
istitle 判断字符串是否是一个标题类型（单词首字母都是大写的）
该函数只用于英文
'''

print('Hello Lisi'.istitle()) # True
print('Hello lisi'.istitle()) # False

'''
isupper 与 islower
isupper 判断字符串中的字母是否都是大写
islower 判断字符串中的字母是否都是小写
注意：只判断字母
'''
print('hello'.islower(), 'HELLO'.isupper(), 'sdf你好'.islower()) # True True True

# join 和 split
