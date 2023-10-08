const input = {a: 1, 'b.c.d': 1};

const output = {};

for (let key in input) {
  const value = input[key];
  const nestedKeys = key.split('.');
  
  let nestedObj = output;
  
  for (let i = 0; i < nestedKeys.length - 1; i++) {
    const nestedKey = nestedKeys[i];
    
    if (!nestedObj.hasOwnProperty(nestedKey)) {
      nestedObj[nestedKey] = {};
    }
    
    nestedObj = nestedObj[nestedKey];
  }
  
  nestedObj[nestedKeys[nestedKeys.length - 1]] = value;
}

console.log(output);