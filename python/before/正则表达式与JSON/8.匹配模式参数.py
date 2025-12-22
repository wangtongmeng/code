import re

language = 'PythonC#\nJavaPHP'

print(re.findall('c#', language, re.I))  # 忽略大小写 ['C#']

print(re.findall('c#.{1}', language, re.I | re.S))  # ['C#\n']
# re.S可以让.匹配换行符\n，并且 | 是且的关系，也就是同时生效
