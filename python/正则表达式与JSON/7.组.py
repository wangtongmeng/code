# 组
import re
a = 'PythonPythonPythonPythonPython'

# 匹配连续三个Python
print(re.findall('PythonPythonPython', a))  # ['PythonPythonPython']
print(re.findall('(Python){3}', a))  # ['Python'] 预期不太一样？

# ()表示组，()中的字符是且的关系，一个正则表达式中可以有多个组
# [abc] []中的字符是或的关系
