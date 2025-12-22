# coding:utf-8

'''
转义字符
'''

# \n 换行符
info = ('my name \nis %s\n' % 'lisi')
print(info)
'''
my name 
is lisi
'''

# \t 间隔符
info_2 = ('my name\n\t is lisi')
print(info_2)
'''
my name
	 is lisi
'''

# \v 纵向制表符
info_3 = ('my name \vis lisi')
print(info_3)
'''
my name is lisi
这里没有换行，打开终端，可以看到
my name 
        is lisi

'''

# \a 响铃？ 在某些调试模式下回响，比如终端
info_4 = ('my name \ais lisi')
print(info_4)
'''
my name is lisi
'''

# \b 类似于删除
info_5 = ('my name is lisi\b')
print(info_5) # my name is lis

# \r 删除前面的信息
info_6 = ('my name is lisi\r')
print('_____')
print(1, info_6, info_5)
'''
 my name is lis
'''
# \f
info_6 = ('my name is lisi\f')
print('f', info_6)
'''
f my name is lisi

在terminal下，会多一个空行，
f my name is lisi


'''

# 转义引号 斜杠
print('转义引号', 'my name \'is\' lisi', "my name \"is\" lisi") # 转义引号 my name 'is' lisi my name "is" lisi
print('转义斜杠', '\\') # 转义斜杠 \

# 转义无效符
print('转义无效符', r'hello \f') # 转义无效符 hello \f
print('my name is \\ lisi') # my name is \ lisi
print(r'my name is \\ lisi') # my name is \\ lisi
# 转义无效符 对 格式化字符串是无效的
print(r'my name is %s' % 'lisi') # my name is lisi