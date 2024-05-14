#coding:utf-8
# remove
drinks = ['apple', 'orange', 'banana']

drinks.remove('apple')

print(drinks) # ['orange', 'banana']

'''
注意事项
- 如果删除的成员不存在，会直接报错
- 如果被删除的元素有多个，只会删除第一个
- remove 直接操作原列表
'''

# del 完全删除变量
del drinks
print(drinks) # NameError: name 'drinks' is not defined