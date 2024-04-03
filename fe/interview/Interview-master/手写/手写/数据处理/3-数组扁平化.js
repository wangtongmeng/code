// reduce 实现

function flat(arr) {
  return arr.reduce(
    (prev, cur) => prev.concat(Array.isArray(cur) ? flat(cur) : cur),
    []
  );
}

const arr = [1, [2, 3], 4, [5, 6]];
console.log(flat(arr));

// api
console.log(arr.flat(Infinity));
