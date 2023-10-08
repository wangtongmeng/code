const input = {a: 1, 'b.c.d': 1};

const output = {};

for (let key in input) {
  const value = input[key];
  const keys = key.split(/\.(?![^\[]*])/g); // 使用正则转成对象
  let nestedObj = output;

  for (let i = 0; i < keys.length - 1; i++) {
    const currentKey = keys[i];
    const nextKey = keys[i + 1];

    if (!nestedObj[currentKey]) {
      nestedObj[currentKey] = /^\d+$/.test(nextKey) || nextKey === '' ? [] : {};
    }

    nestedObj = nestedObj[currentKey];
  }

  const lastKey = keys[keys.length - 1];
  nestedObj[lastKey] = value;
}

console.log(output);