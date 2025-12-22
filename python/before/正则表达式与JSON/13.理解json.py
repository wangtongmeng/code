'''
什么是JSON，是一种轻量级的数据交换格式

JSON VS XML
json 易于阅读、易于解析、网络传输效率高，可跨语言交换数据

json   python
object dict
array  list
string str
number int float
true   True
false  False
null   None

'''
# 反序列化
import json
json_str = '[{"name":"张三", "age": 18, "flag": false}]'

student = json.loads(json_str)
print(type(student), student)
# <class 'list'> [{'name': '张三', 'age': 18, 'flag': False}]

# 序列化

student1 = [
    {'name': '张三', 'age': 18, 'flag': False},
    {'name': '李四', 'age': 18, 'flag': True},
]

json_str = json.dumps(student)
print(type(json_str), json_str)
# <class 'str'> [{"name": "\u5f20\u4e09", "age": 18, "flag": false}]
