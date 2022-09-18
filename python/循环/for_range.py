for x in range(0, 10):
    print(x, end="")  # 0123456789

# 间隔打出
for x in range(0, 10, 2):  # 第3个参数表示间隔
    print(x, end=" | ")  # 02468
# 倒序
for x in range(10, 0, -2):
    print(x, end=" | ")  # 10 | 8 | 6 | 4 | 2 |


a = [1, 2, 3, 4, 5, 6, 7, 8]

# for i in range(0, len(a), 2):
#     print(a[i], end=' | ')  # 1 | 3 | 5 | 7 |

b = a[0:len(a):2]  # 2是步长
print(b)  # [1, 3, 5, 7]
