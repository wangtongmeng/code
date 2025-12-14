import asyncio


class AsyncDatabaseConnection:
    async def __aenter__(self):
        print("建立数据库连接...")
        await asyncio.sleep(0.5)
        print("数据库连接已建立")
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("关闭数据库连接...")
        await asyncio.sleep(0.2)
        print("数据库连接已关闭")
        return False

    async def execute_query(self, query):
        print(f"执行查询: {query}")
        await asyncio.sleep(0.3)
        return f"查询结果: {query}"


async def async_context():
    async with AsyncDatabaseConnection() as db:
        result = await db.execute_query("SELECT * FROM users")
        print(result)


asyncio.run(async_context())
