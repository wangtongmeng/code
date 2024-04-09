# list 
# 列表 一种有序的集合，可以随时添加和删除其中的元素。
classmates = ['Michael', 'Bob', 'Tracy']
print(classmates) # ['Michael', 'Bob', 'Tracy']

# 总数
print(len(classmates)) # 3

# 使用索引
print(classmates[0], classmates[1], classmates[2]) # Michael Bob Tracy 
# 获取最后一个元素
print(classmates[-1], classmates[len(classmates) - 1]) # Tracy Tracy
# 获取倒数第二个元素
print(classmates[-2]) # Bob

# 当索引超出了范围时，Python会报一个IndexError错误
# print(classmates[4]) # Traceback (most recent call last):
# print(classmates[-4]) # 倒数也可能越界，报错 Traceback (most recent call last)

