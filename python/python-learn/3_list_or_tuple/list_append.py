#coding:utf-8

names = ['lisi']
print(id(names)) # 4376119680
names.append('wangwu')
print(names) # ['lisi', 'wangwu']
print(id(names)) # 4369549696 地址没变


books = []
number = 1.1
tuple_test = (1,)
dict_test = {'name': 'lisi'}
books.append(number)
books.append(tuple_test)
books.append(dict_test)
print(books) # [1.1, (1,), {'name': 'lisi'}]

