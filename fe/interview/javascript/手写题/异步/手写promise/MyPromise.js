class MyPromise {
  state = 'pending'
  value = undefined
  reason = undefined
  resolvedCallbacks = []
  rejectedCallbacks = []
  constructor(fn) {
    const resolvedHandler = (value) => {
      setTimeout(() => {
        if (this.state === 'pending') {
          this.state = 'fulfilled'
          this.value = value
          this.resolvedCallbacks.forEach(fn => fn(value))
        }
      })
    }
    const rejectedHandler = (reason) => {
      setTimeout(() => {
        if (this.state === 'pending') {
          this.state = 'rejected'
          this.reason = reason
          this.rejectedCallbacks.forEach(fn => fn(reason))
        }
      });
    }
    try {
      fn(resolvedHandler, rejectedHandler)
    } catch (err) {
      rejectedHandler(err)
    }
  }
  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : v => v
    fn2 = typeof fn2 === 'function' ? fn2 : err => err
    const p = new Promise((resolve, reject) => {
      if (this.state === 'pending') {
        this.resolvedCallbacks.push(() => {
          try {
            resolve(fn1(this.value))
          } catch (err) {
            reject(err)
          }
        })
        this.rejectedCallbacks.push(() => {
          try {
            reject(fn2(this.reason))
          } catch (err) {
            reject(err)
          }
        })
      }

      if (this.state === 'fulfilled') {
        try {
          resolve(fn1(this.value))
        } catch (err) {
          reject(err)
        }
      }
      if (this.state === 'rejected') {
        try {
          resolve(fn2(this.value))
        } catch (err) {
          reject(err)
        }
      }
    })
    
    return p

  }
  catch(fn) {
    return this.then(null, fn)
  }
}
MyPromise.resolve = function(value) {
  return new Promise((resolve, reject) => resolve(value))
}
MyPromise.reject = function(reason) {
  return new Promise((resolve, reject) => reject(reason))
}
MyPromise.all = function(pList = []) {
  const p = new Promise((resolve, reject) => {
    const result = []
    let resolvedCount = 0
    pList.forEach((p, i) => {
      p.then(value => {
        result[i] = value
        resolvedCount++
        if (resolvedCount === pList.length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p
}
MyPromise.race = function(pList = []) {
  let resolved = false
  const p = new Promise((resolve, reject) => {
    pList.forEach(p => {
      p.then(value => {
        if (!resolved) {
          resolved = true
          resolve(value)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p
}