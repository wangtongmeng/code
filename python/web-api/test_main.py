# 导入FastAPI的TestClient，用于测试FastAPI应用
from fastapi.testclient import TestClient

# 从main模块导入app对象（FastAPI实例）
from main import app

# 创建TestClient实例，传入FastAPI应用
client = TestClient(app)


# 定义测试根路径的函数
def test_read_root():
    # 使用测试客户端发起GET请求到根路径
    response = client.get("/")
    # 断言返回状态码为200，表示请求成功
    assert response.status_code == 200
    # 断言返回的JSON数据为{"message": "Hello World"}
    assert response.json() == {"message": "Hello World"}
