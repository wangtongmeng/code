// '[' '] ' '{' '}' '【' '】'  判断是否成对     [ {【】}]、 [] {}【】=> true     {[]】}   => false

function isValid(str) {
  const map = {
    "{": "}",
    "[": "]",
    "【": "】",
  };
  const stack = [];
  for (let s of str) {
    if (map[s]) {
      stack.push(s);
    } else {
      const last = stack[stack.length - 1];
      if (map[last] === s) {
        stack.pop();
      } else {
        stack.push(s);
      }
    }
  }
  console.log(stack);

  return stack.length === 0;
}

console.log(isValid("[]{}【】"));
console.log(isValid("{[]】}"));
