import { expect, describe, vi, test, Mocked }  from 'vitest';
import axios from 'axios'
vi.mock('axios')

const mockedAxios = axios as Mocked<typeof axios>


// 函数测试


function testFn(number, callback) {
  // 判断 number 是否大于 10
  if (number > 10) {
    // 如果 number 大于 10，则执行回调函数 callback 并传入 number 作为参数
    callback(number);
  }
}

async function request () {
  const {data} = await axios.get('fake.url')
  return data
}


describe('functions', () => {
  test('模拟回调函数被调用', () => {
    const callback = vi.fn();
    testFn(12, callback);
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(12);
  })

  test('监控对象方法调用', () => {
    const obj = {
      getName: () => 1
    }
    const spy = vi.spyOn(obj, 'getName');
    obj.getName();
    expect(spy).toHaveBeenCalled(); // 被调用了
    obj.getName();
    expect(spy).toHaveBeenCalledTimes(2); // 被调用了两次
  })

  test('模拟第三方库的方式', async () => {
    // mockedAxios.get.mockImplementation(() => Promise.resolve({data: 123})  )
    mockedAxios.get.mockResolvedValue({data: 123})
    const result = await request()
    expect(result).toBe(123)
  })
})

