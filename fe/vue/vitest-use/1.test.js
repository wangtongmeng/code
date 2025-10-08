import { expect, test }  from 'vitest';
test('测试值相等', () => {
  expect(1 + 2).toBe(3);

  const name = 'world'
  expect(name).toBe('world')
})

test('测试布尔值', () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
})

test('测试数字比较大小', () => {
  expect(1).toBeGreaterThan(0);
  expect(1).toBeLessThan(2);
})

test('对象相等', () => {
  // toBe是引用比较，toEqual是值比较
  expect({name: 'lisi'}).toEqual({name: 'lisi'})
})