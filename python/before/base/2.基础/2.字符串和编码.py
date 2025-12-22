# 字符串和编码
# 在最新的Python 3版本中，字符串是以Unicode编码的
# print('包含中文的str')

# ord()函数获取字符的整数表示
print(ord('A')) # 65
print(ord('中')) # 20013

# chr()函数把编码转换为对应的字符
print(chr(66)) # B
print(chr(25991)) # 文

# str 转成 bytes
# 纯英文的str可以用ASCII编码为bytes，内容是一样的，含有中文的str可以用UTF-8编码为bytes。含有中文的str无法用ASCII编码，因为中文编码的范围超过了ASCII编码的范围，Python会报错。
print('ABC'.encode('ascii')) # b'ABC'
print('中文'.encode('utf-8')) # b'\xe4\xb8\xad\xe6\x96\x87'
# print('中文'.encode('ascii')) # 报错 Traceback (most recent call last)

# 把 bytes 变为 str
print(b'ABC'.decode('ascii')) # ABC
print(b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8'))