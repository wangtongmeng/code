Array.prototype.myEvery = function (callback, context = window) {
  let len = this.length,
    flag = true,
    i = 0;

  for (; i < len; i++) {
    if (!callback.apply(context, [this[i], i, this])) {
      flag = false;
      break;
    }
  }
  return flag;
};

// var obj = {num: 1}
// var aa=arr.myEvery(function(v,index,arr){
//     return v.num>=12;
// },obj)
// console.log(aa)
