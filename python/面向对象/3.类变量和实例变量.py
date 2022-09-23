# 类变量 实例变量
class Student():
    name = 'wtm'
    age = 0

    def __init__(self, name, age):  # self 命名随便，可以改成this，推荐self
        self.name = name
        self.age = age
        print('init')

    def do_homework(self):
        print('homework')


student1 = Student('张三', 18)
student2 = Student('李四', 18)
# 实例变量
print(student1.name, student2.name)  # 张三 李四
# 类变量
print(Student.name)  # wtm
