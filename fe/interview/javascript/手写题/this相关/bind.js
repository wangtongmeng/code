~(function (prototype) {
  Object.create = function (prototype) {
      function F() { }
      F.prototype = prototype;
      return new F();
  }
  prototype.myBind = function (OThis, ...outerArgs) {
      let thatFunc = this;//缓存当前的函数 Point
      let fBound = function (...innerArgs) {
          //如果在这里判断我这个函数是new来调用的还是直接调用？
          return thatFunc.apply(
              //如果你是在new这个绑定的后的函数的话，则bind绑定的时候传的oThis没有用了
              this instanceof thatFunc ? this : OThis, [...outerArgs, ...innerArgs]
          );
      };
      fBound.prototype = Object.create(thatFunc.prototype);
      // fBound.prototype = thatFunc.prototype;
      //new fBound() this fBound
      return fBound;
  };
})(Function.prototype);
