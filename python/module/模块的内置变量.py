import t.c9

# 模块的内置变量
# 入口文件和普通模块的区别
#   入口文件 name 是 __main__，package也是空
# VSCode中python代码输出中文乱码解决 https://blog.csdn.net/zhangfeng0881/article/details/112632018

infos = dir()
# ['__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 't']
print(infos)

print('本文件')
print('name:  ' + __name__)
print('package:  ' + (__package__ or '当前模块不属于任何包'))
print('doc:  ' + (__doc__ or '当前模块没有文档注释'))
print('file:  ' + __file__)


'''
name:  t.c9
package:  t
doc:  
This is a c9 doc

file:  d:\code\python\module\t\c9.py
本文件
name:  __main__
package:  当前模块不属于任何包
doc:  当前模块没有文档注释
file:  d:\code\python\module\模块的内置变量.py
'''
