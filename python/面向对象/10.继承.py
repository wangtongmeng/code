class Human():
    sum = 0

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_name(self):
        print(self.name)


class Student(Human):  # 传入父类，继承
    def __init__(self, name, age):
        super(Student, self).__init__(name, age)  # 子类调用父类方法, 也可以在其他方法里用

    def do_homework(self):
        print('Student do homework')


student1 = Student('张三', 18)
print(student1.name, student1.age)  # 张三 18
print(Student.sum, student1.sum)  # 0 0
student1.get_name()  # 张三
