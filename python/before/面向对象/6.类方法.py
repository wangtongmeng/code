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


student1 = Student('张三', 18)
# 通过类方法来改变类变量（推荐）
Student.plus_sum()
# 实例也能调用类方法修改类变量（不推荐）
student1.plus_sum()
student1.do_homework()
