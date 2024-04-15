# dict 字典 类似 map 使用键-值（key-value）存储
# dict的key必须是不可变对象，在Python中，字符串、整数等都是不可变的
d = {'a': 1, 'b': 2, 'c': '3'}
# 通过key访问
print(d['a']) # 1 
# 赋值
d['a'] = 2
print(d['a']) # 2
# key 不存在会报错
# print(d['d']) # KeyError: 'd'

# 判断 key 是否存在两种办法：
## 通过in判断key是否存在
print('a' in d) # True
## 二是通过dict提供的get()方法，如果key不存在，可以返回None，或者自己指定的value
print(d.get('Thomas')) # None
print(d.get('Thomas', -1)) # -1


# 删除 key
print(d.pop('a')) # 2
print(d) # {'b': 2, 'c': '3'}


# 整数和字符串不可变，可以作为key
print({1: 'a', 2: 'b', '1': 'aa', '2': 'bb'}) # {1: 'a', 2: 'b', '1': 'aa', '2': 'bb'}