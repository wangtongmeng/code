# coding:utf-8

"""
集合与列表的区别
    顺序
        列表有序，集合无序
    内容
        列表可重复，集合不可能重复
    功能
        列表用于数据的使用，集合用于数据的交集并集差集的获取
    索引
        列表有索引，集合无索引
    符号
        列表 [] [1,2,3]，集合 {} {1,2,3}
"""

# 集合的创建
# 通过 set 函数来创建集合，不能使用 {} 来创建集合
a_set = set()  # 空集合
b_set = set([1, 1, 1, 2, 3])  # 传入列表或元组
c_set = {1, 2, 3}  # 传入元素
d_set = {}  # 错误的，虽然没报错，但是创建了字典类型，而不是集合类型
print(a_set, b_set, c_set, d_set, d_set)  # set() {1, 2, 3} {1, 2, 3} {}
print(type(a_set), type(b_set), type(c_set), type(d_set))  # <class 'set'> <class 'set'> <class 'set'> <class 'dict'>
