class MyPromise {
  state = 'pending'
  value = undefined
  reason = undefined
  resolveCallbacks = []
  rejectCallbacks = []
  constructor(fn) {
    const resolveHandler = (value) => {
      setTimeout(() => {
        if (this.state = 'pending') {
          this.state = 'fulfilled'
          this.value = value
          this.resolveCallbacks.forEach(fn => fn(value))
        }
      })
    }
    const rejectHandler = (reason => {
      setTimeout(() => {
        if (this.state === 'pending') {
          this.state = 'rejected'
          this.reason = reason
          this.rejectCallbacks.forEach(fn => fn(reason))
        }
      });
    })
    
    try {
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }
  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2: (e) => e
    if (this.state === 'pending') {
      const p = new Promise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) { 
            reject(err)
          }
        })
        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            reject(newReason)
          } catch (err) {
            reject(err)
          }
        })
      })
      return p
    }
    if (this.state === 'fulfilled') {
      const p = new Promise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (err) {
          reject(err)
        }
      })
      return p
    }
    if (this.state === 'rejected') {
      const p = new Promise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (err) {
          reject(err)
        }
      })
    }
  }
  // then的特殊形式
  catch(fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = function (value) {
  return new Promise((resolve, reject) => resolve(value))
}
MyPromise.reject = function (reason) {
  return new Promise((resolve, reject) => reject(reason))
}
MyPromise.all = function (pList = []) {
  const p = new Promise((resolve, reject) => {
    let result = []
    const len = pList.length
    let resolvedCount = 0
    pList.forEach(p => {
      p.then(data => {
        result.push(data)
        resolvedCount++
        if (resolvedCount === len) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p
}
MyPromise.race = function (pList = []) {
  let resolved = false
  const p = new Promise((resolve, reject) => {
    pList.forEach(p => {
      p.then(data => {
        if (!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p
}