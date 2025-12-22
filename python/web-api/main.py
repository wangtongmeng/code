# 导入 FastAPI 框架，用于构建 Web API
from fastapi import FastAPI

# 导入 requests 库，用于发送 HTTP 请求
import requests

# 导入 uvicorn，用于作为 ASGI 服务器启动应用
import uvicorn

# 创建 FastAPI 应用实例
app = FastAPI()


# 定义根路由，当访问"/"时触发
@app.get("/")
# 处理根路径请求的函数，返回一个消息
def read_root():
    return {"message": "Hello World"}


# 定义/external路由，当访问"/external"时触发
@app.get("/external")
# 处理/external路径请求的函数，从外部获取数据
def get_external_data():
    # 发送GET请求到 https://www.example.com
    response = requests.get("https://www.example.com")
    # 返回请求的状态码
    return {"status": response.status_code}


# 判断是否为主程序入口
if __name__ == "__main__":
    # 启动 uvicorn 服务器，监听 0.0.0.0:8000
    uvicorn.run(app, host="0.0.0.0", port=8000)
