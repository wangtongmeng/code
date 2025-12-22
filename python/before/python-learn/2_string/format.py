# coding:utf-8

info = 'my name is %s, my age is %s' % ('lisi', 10)
info2 = 'my name is %s, my age is %s'

print(info) # my name is lisi, my age is 10


name = 'lisi'
age = 10
print(info2 % (name, age)) # my name is lisi, my age is 10


# 打印列表
books = ['python', 'java', 'ruby']
info_3 = 'my name is %s, my age is %s, my book is %s'
print(info_3 % (name, age , books)) # my name is lisi, my age is 10, my book is ['python', 'java', 'ruby']

# 打印字典
dict_01 = {'a': 'a', 'b': 'b', 'c': 'c'}
print('4_dict is %s' % dict_01) # 4_dict is {'a': 'a', 'b': 'b', 'c': 'c'}


'''
format 字符串格式化函数（推荐）
'''
info_4 = 'hello {0}, 今天你的气色{1}'
print(info_4.format('lisi', '不错')) # hello lisi, 今天你的气色不错


'''
python3.6 新的格式化方案 f-strings
字符串前加 f 符号
需要格式化的位置使用 {变量名}
'''
print(f'hello {name}') # hello lisi

'''
格式化符号
%s 字符串
%d 整型
%f 浮点型
%u 无符号整型（正整型） 
%c 字符
'''


'''
应用场景，发送短信、邮件
'''