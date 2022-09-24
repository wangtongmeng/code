from traceback import print_tb


class Student():
    sum = 0
    name = 'wtm'
    __score = 0

    def __init__(self, name):
        self.name = name

    def marking(self, score):
        self.__score = score
        print(self.name + '同学考试份分数为：' + str(self.__score))


student1 = Student('张三')
student1.marking(60)
# print(student1.__score)
# 不能访问私有变量 AttributeError: 'Student' object has no attribute '__score'
print(student1.__dict__)
# 原因是python把私有变量的key改了
# {'name': '张三', '_Student__score': 60}
print(student1._Student__score)  # 60 还是能访问到的

# 如果给实例赋值__xxx的值，也是能访问的，这里只是当做一个普通的实例变量
student1.__score = 1
print(student1.__score)  # 1
print(student1.__dict__)  # {'name': '张三', '_Student__score': 60, '__score': 1}

# 互不影响
student1.marking(61)
print(student1.__score)  # 1
