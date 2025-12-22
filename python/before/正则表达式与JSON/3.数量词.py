import re

a = 'python1111java4234php'

r = re.findall('[a-z]{3,6}', a)  # {3，6}表示数量范围（默认是贪婪模式，所以匹配3个还会继续匹配到6个）
print(r)  # ['python', 'java', 'php']
