const graph = require("./graph");

const visited = new Set();
visited.add(2);
const q = [2]; // 入队说明访问过了
while (q.length) {
  const n = q.shift();
  console.log(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      visited.add(c);
    }
  });
}
// 2 0 3 1
