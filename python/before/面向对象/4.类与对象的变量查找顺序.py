# 构造函数会自动调用，也可以显示调用（就调用2遍了），如果显示调用就是个普通函数，但只能返回None

# 类变量 实例变量
class Student():
    sum = 0
    name = 'wtm'
    age = 0

    def __init__(self, name, age):
        self.name = name
        # self.age = age

    def do_homework(self):
        print('homework')


student1 = Student('张三', 18)
# 实例的变量会查找实例的__dict__, 如果没有才会去类的__dict__中去找（类似于默认值）
print(student1.name, student1.age, student1.__dict__)
# 张三 0 {'name': '张三'}

# 类的变量，存在__dict__中
print(Student.name, Student.__dict__)
# wtm {'__module__': '__main__', 'sum': 0, 'name': 'wtm', 'age': 0, '__init__': <function Student.__init__ at 0x0000023B9628E8C0>, 'do_homework': <function Student.do_homework at 0x0000023B9628EC20>, '__dict__': <attribute '__dict__' of 'Student' objects>, '__weakref__': <attribute '__weakref__' of 'Student' objects>, '__doc__': None}
