import re

a = 'python1111java4234php'

# 贪婪模式，尽可能多的匹配
r = re.findall('[a-z]{3,6}', a)
print(r)  # ['python', 'java', 'php']

# 非贪婪模式，尽可能少的匹配
r1 = re.findall('[a-z]{3,6}?', a)  # 在数量词后加一个?，表示非贪婪
print(r1)  # ['pyt', 'hon', 'jav', 'php']
