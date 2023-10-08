!function (proto) {
  function getContext(context) {
      context = context || window;
      var type = typeof context;
      if (['number', 'string', 'boolean', 'null'].includes(type)) {
          context = new context.constructor(context);
      }
      return context;
  }
  function call(context, ...args) {
      context = getContext(context);
      context._fn = this;
      let result = context._fn(...args);
      delete context._fn;
      return result;
  }
  function apply(context, args) {
      context = getContext(context);
      context._fn = this;
      let result = context._fn(...args);
      delete context._fn;
      return result;
  }

  function bind(context, ...bindArgs) {
      return (...args) => this.call(context, ...bindArgs, ...args);
  }
  proto.call = call;
  proto.apply = apply;
  proto.bind = bind;
}(Function.prototype)