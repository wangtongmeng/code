# 定义类
class Student():
  # 类的属性
    name = ''
    age = 0

    # 类的方法（不是函数，函数偏执行）
    def print_file(self):  # 需要传入self
        print('name: ' + self.name)
        print('age: ' + str(self.age))
