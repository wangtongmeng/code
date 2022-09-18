# id elif

a = input()
print(type(a))  # 输入的是字符串
print('a is ' + a)
a = int(a)
if a == 1:
    print('apple')
elif a == 2:
    print('orange')
elif a == 3:
    print('banana')
else:
    print('shopping')
