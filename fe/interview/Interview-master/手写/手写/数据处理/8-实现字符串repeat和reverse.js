String.prototype.myRepeat = function (n) {
  const res = "";
  for (let i = 0; i < n; i++) {
    res += this;
  }
  return res;
};

String.prototype.myReverse = function () {
  return this.split("").reverse().join("");
};

let str = "1234";

console.log(str.myReverse());
