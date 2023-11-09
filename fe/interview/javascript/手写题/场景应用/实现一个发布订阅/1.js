class EventCenter {
  constructor() {
    this.handlers = {}
  }
  // 监听事件
  addEventListener(type, handler) {
    if (!this.handlers[type]) {
      this.handlers[type] = []
    }
    this.handlers[type].push(handler)
  }
  // 触发事件
  dispatchEvent(type, params) {
    if (!this.handlers[type]) {
      return new Error('该事件未注册')
    }
    this.handlers[type].forEach(handler => {
      handler(...params)
    })
  }
  // 移除监听事件
  removeEventListener(type, handler) {
    let handlers = this.handlers[type]
    if (!handlers) {
      return new Error('事件无效')
    }
    if (!handler) {
      // 如果没有handler，则移除整个类型
      delete this.handlers[type]
    } else {
      const index = handlers.findIndex(el => el === handler)
      if (index === -1) {
        return new Error('无该绑定事件')
      }
      handlers.splice(index, 1)
      if (handlers.length === 0) {
        delete this.handlers[type]
      }
    }
  }
}