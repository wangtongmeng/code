import re


def convert(value):
    print(value)  # value是一个对象，里面有匹配的相关信息
    matched = value.group()  # 通过.group()取值
    return '!' + matched + '!'


language = "PythonC#JavaC#PHPC#"

print(re.sub('C#', 'GO', language))  # PythonGOJavaGOPHPGO 全部替换
print(re.sub('C#', 'GO', language, 1))  # PythonGOJavaC#PHPC# 替换一个
print(re.sub('C#', convert, language))  # 可以传入函数
# <re.Match object; span=(17, 19), match='C#'>
# Python!C#!Java!C#!PHP!C#!


print(language.replace('C#', 'GO'))  # PythonGOJavaGOPHPGO 字符串也可以通过replace替换

print(language)  # PythonC#JavaC#PHPC# 由于字符串是不可变的，所以原字符串没有改变
