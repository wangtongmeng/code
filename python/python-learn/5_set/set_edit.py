# coding:utf-8

# add
a_set = set()
a_set.add('lisi')
print(a_set)  # {'lisi'}
a_set.add(True)
a_set.add(None)
print(a_set)  # {None, 'lisi', True}

# update 加入一个新的集合（或列表，元组，字符串），如新集合内的元素在原集合中存在则无视
# 用法 set.update(iterable)；数 iterable: 集合，列表，元组，字符串；返回值：无
b_set = set()
b_set.update([3, 4, 5])
print(b_set)  # {3, 4, 5}
b_set.update((1,2))
print(b_set)  # {1, 2, 3, 4, 5}
