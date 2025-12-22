class Student():
    sum = 0
    name = 'wtm'
    age = 0
    __score = 0

    def __init__(self, name, age):  # 可以外部调用，因为后面还有__，自定义__xx__外部也是能访问的
        self.name = name

    # 私有方法，只能内部调用
    def __marking(self, score):
        if score < 0:
            return '不能是负分'
        self.__score = score
        print(self.name + '同学考试份分数为：' + str(self.__score))

    def do_homework(self):
        self.__marking(60)


student1 = Student('张三', 18)
student1.do_homework()
