# 构造函数会自动调用，也可以显示调用（就调用2遍了），如果显示调用就是个普通函数，但只能返回None

class Student():
    name = ''
    age = 0

    def __init__(self, name, age):
        # 构造函数
        self.name = name
        self.age = age
        print('init')
        # return 'student'  # 返回值无效，只能是None __init__() should return None, not 'str'

    def do_homework(self):
        print('homework')


print('构造函数会自动调用')
student1 = Student('张三', 18)  # init
print('显式调用构造函数')
# a = student1.__init__()  # init
# print(a, type(a))  # None <class 'NoneType'>
print(student1.age, student1.name)  # 18 张三
