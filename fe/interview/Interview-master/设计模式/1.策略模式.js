// 策略模式的目的就是将算法的使用与算法的实现分离开，一个策略模式的程序至少由两部分组成。
// 第一个部分是策略类，策略类封装了具体的算法，并负责具体的计算过程。
// 第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类。

var strategies = {
  S: function (salary) {
    return salary * 4;
  },
  A: function (salary) {
    return salary * 3;
  },
  B: function (salary) {
    return salary * 2;
  },
};

var calculateBonus = function (level, salary) {
  return strategies[level](salary);
};

console.log(calculateBonus("S", 2000));
