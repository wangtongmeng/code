# coding:utf-8

message_en = 'Hello World!'
message_cn = '你好 Li Si'
message_mix = '你好呀，Li Si，今天天气不错'


print(message_en.lower(), message_cn.lower(), message_mix.lower())
print(message_en.casefold(), message_cn.casefold(), message_mix.casefold())
# lower 和 casefold 的区别 ，小语种
'''
hello world! 你好 li si 你好呀，li si，今天天气不错
hello world! 你好 li si 你好呀，li si，今天天气不错
'''