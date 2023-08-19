const json = {
  a: { b: { c: 1 } },
  d: [1, 2],
};

const dfs = (n, path) => {
  console.log(n, path);
  Object.keys(n).forEach((k) => {
    dfs(n[k], path.concat(k));
  });
};
dfs(json, []);
// { a: { b: { c: 1 } }, d: [ 1, 2 ] } []
// { b: { c: 1 } } [ 'a' ]
// { c: 1 } [ 'a', 'b' ]
// 1 [ 'a', 'b', 'c' ]
// [ 1, 2 ] [ 'd' ]
// 1 [ 'd', '0' ]
// 2 [ 'd', '1' ]
