// 手写eventBus
class EventBus {
    constructor() {
        this.eventContainer = new Map();
    }

    // 实际上并不是监听，而是给eventContainer里存上一个fn，
    $on(type, excuteFn) {
        if (!this.eventContainer.has(type)) {
            this.eventContainer.set(type, excuteFn);
        }
    }

    $off(type) {
        this.eventContainer.has(type) && (this.eventContainer.delete(type));
    }

    $emit(type) {
        let fn = this.eventContainer.get(type);
        // apply 接受数组作为参数
        fn.apply(this, [...arguments].slice(1));
    }
}

let ev = new EventBus()
ev.on('myevent',name=>{console.log('hello,',name)});
ev.emit('myevent','jack');


// 实现红绿灯
// async await promise settimeout

// 实现节流
function throttle(func, delay) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;

        if(timer){
            return;
        }
        timer = setTimeout(() => {
            func.apply(context, args);
            timer = null;
        }, delay);
    };
}

// 手写promise.all
function all(arr){
    //返回一个promise
    return new Promise((res, rej) => {
      let length = arr.length  //传入的promise的个数
      let count = 0  //进入fullfilled的promise个数
      const result = []  //创建一个等长的数组,放置结果
      for(let i = 0; i < arr.length; i++){
        arr[i].then(resolve => {
          result.push(resolve) //将每次结果保存在result数组中
          count ++  //个数加1
          //是否所有的promise都进入fullfilled状态
          if(count === length){
            res(result)  //返回结果
          }
        }).catch(e => {
          rej(e)  //如果有错误则直接结束循环，并返回错误
        })
      }
    })
  }

