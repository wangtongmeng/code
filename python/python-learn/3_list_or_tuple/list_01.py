#coding:utf-8

names = ['zhangsan', 'lisi', 'wangwu']

# 累加
names_add = names + names
# 累成
names_c = names * 3

print(names_add)
print(names_c)
print(len(names_c)) # 9
'''
['zhangsan', 'lisi', 'wangwu', 'zhangsan', 'lisi', 'wangwu']
['zhangsan', 'lisi', 'wangwu', 'zhangsan', 'lisi', 'wangwu', 'zhangsan', 'lisi', 'wangwu']
9
'''

names += ('abc', )
print(names) # ['zhangsan', 'lisi', 'wangwu', 'abc']

# 成员运算符
print('lisi' in names, 'lisi' not in names) # True False