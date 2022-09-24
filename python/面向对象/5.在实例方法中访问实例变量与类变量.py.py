class Student():
    sum = 0
    name = 'wtm'
    age = 0

    def __init__(self, name, age):
        self.name = name

    def do_homework(self):
        print('homework')
        # 访问实例变量
        print(self.name)
        # 访问类变量 方法1
        print(Student.sum)
        # 访问类变量 方法2
        print(self.__class__.sum)


student1 = Student('张三', 18)
student1.do_homework()
# 张三
# 0
# 0
