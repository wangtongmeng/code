class Student():
    sum = 0
    name = 'wtm'
    age = 0

    def __init__(self, name, age):
        self.name = name

    def do_homework(self):
        print('homework')
        # 修改类变量
        # self.__class__.sum += 1
        # print('学生总数', self.__class__.sum)

    @classmethod
    def plus_sum(cls):
        cls.sum += 1
        print(cls.sum)

    @staticmethod
    def add(x, y):
        # 静态方法中能访问和修改类变量 和类方法类似
        Student.sum = x + y
        print(Student.sum)


student1 = Student('张三', 18)
student1.add(1, 2)
print(Student.sum)
