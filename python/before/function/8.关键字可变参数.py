def fun1(**param):
    print(param, type(param))
    for key, value in param.items():
        print(key, ':', value)


a = {'beijing': '32c', 'shanghai': '31c'}
fun1(bj='32c', sh='31c')
# {'bj': '32c', 'sh': '31c'} <class 'dict'>
# bj : 32c
# sh : 31c

fun1(**a)
# {'beijing': '32c', 'shanghai': '31c'} <class 'dict'>
# beijing : 32c
# shanghai : 31c


def fun2(param1, **param):
    print(param, type(param))
    for key, value in param.items():
        print(key, ':', value)


fun2(1)
# {} <class 'dict'>
