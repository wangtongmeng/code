export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: `姓名${id}` });
      // reject({ msg: "获取数据失败" });
    }, 1000 * Number(id));
  });
}
