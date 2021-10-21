//防抖还是节流?
//防抖  如果你连续触发的话，只在最后执行一次//160ms  10 1
//节流 如果你连接触发的各方面，会减少执行的频率 160 50ms 3
export function debounce(fn,await){
    let timeout;
    return function(){
      let context = this;
      let args = Array.from(arguments);
      if(timeout){
          clearTimeout(timeout);
      }
      timeout = setTimeout(()=>fn.apply(context,args),await);
    }
  }


  function throttle(func,delay){
    let prev = Date.now();
    return function(){
      let context = this;
      let args = Array.from(arguments);
      let now = Date.now();
      if(now - prev >= delay){
        func.apply(context,args);
        prev= now;
      }
    }
  }