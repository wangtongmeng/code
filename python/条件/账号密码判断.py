
ACCOUNT = 'test'  # python中没有常量，通过全部大写表示常量
PASSWORD = '123456'

print('please input account')
user_account = input()  # python中通过_下划线分割

print('please input password')
user_password = input()

if user_account == ACCOUNT and user_password == PASSWORD:
    print('success')
else:
    print('fail')
