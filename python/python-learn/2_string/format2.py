# coding:utf-8


'''
格式化符号
%s 字符串
%d 整型
%f 浮点型
%u 无符号整型（正整型）
%c 字符

%o 格式化无符号八进制数
%x 格式化无符号16进制数
%e 科学计数法格式化浮点数
'''

print('%c' % 1020) # ϼ
print('%c' % 999999) # 最大的数值 󴈿
print('%c' % 'a') # a


print('%u' % -1) # -1


# 小数位后会补零
print('%f' % 1.2) # 1.200000
print('%f' % 3.14) # 3.140000
print('%f' % 12) # 12.000000

print('%d' % 10) # 10
print('%d' % -10) # -10
print('%d' % 1.2) # 1

print('%s' % 123) # 123
print('%s' % '123') # 123
# print('%f' % '1.2') # 报错 TypeError: must be real number, not str


print('{:d}'.format(1)) # 1
print('{:f}'.format(1.2)) # 1.200000
# print('{:u}'.format(12)) # ValueError: Unknown format code 'u' for object of type 'int'


print('%o' % 8) # 10
print('%x' % 16) # 10
print('%e' % 3.14) # 3.140000e+00
number = int('123ab', 16)
print(number) # 74667
print('%x' % number) # 123ab

