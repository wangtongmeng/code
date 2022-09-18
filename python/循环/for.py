""" 
for循环和for-else循环
主要用来遍历/循环 序列或者集合、字典

for
for else
for range
"""

# for else 循环，循环正常结束 else执行
a = [1, 2, 3]
for x in a:
    print(x)
else:
    print('done')  # 1 2 3 done

# break
for x in a:
    if (x == 2):
        break
    print(x)
else:
    print('done')  # 1 循环中断不会执行else语句

# continue
for x in a:
    if (x == 2):
        continue
    print(x)
else:
    print('done')  # 1 3 done

# 嵌套循环
b = [[1, 2, 3], (4, 5, 6)]
for x in b:
    for y in x:
        print(y)
else:
    print('done')  # 123456 done

b = [[1, 2, 3], (4, 5, 6)]
for x in b:
    for y in x:
        if (y == 2):
            break
        print(y)
else:
    print('done')  # 1456 done，之所以执行else，是因为，只是list内循环break掉了，不影响外层正常循环完
