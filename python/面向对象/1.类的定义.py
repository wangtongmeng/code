# 类的作用：封装

# 定义类
class Student():
  # 类的属性
    name = ''
    age = 0

    # 类的方法（不是函数，函数偏执行）
    def print_file(self):  # 需要传入self
        print('name: ' + self.name)
        print('age: ' + str(self.age))


# 类的实例化，不需要写new，类的定义和实例化不推荐在一个模块中
student = Student()
student.print_file()
# name:
# age: 0


# 在其他模块引入类，参考c2

# 类和对象的区别
# 行为和特征相同的可以分为一类，类的实例是对象，对象更加具体
