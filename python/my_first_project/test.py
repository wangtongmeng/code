import requests

# 发送一个简单的 HTTP 请求
response = requests.get("https://www.example.com")
print(f"状态码：{response.status_code}")
print("请求成功！")
