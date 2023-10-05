// 实现sleep函数（使用Promise封装setTimout）
function sleep(delay){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay);
  })
}

sleep(1000).then(() => {
  console.log(1);
})