import requests
from bs4 import BeautifulSoup
import pandas as pd

# 发送 HTTP 请求
url = "https://www.example.com"
response = requests.get(url)

# 解析 HTML
soup = BeautifulSoup(response.text, "html.parser")

# 提取数据（示例）
title = soup.title.string if soup.title else "No title"

# 保存数据
data = {"URL": [url], "Title": [title]}
df = pd.DataFrame(data)
df.to_csv("results.csv", index=False)

print("爬取完成！")
