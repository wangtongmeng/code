// 实现一个ajax请求
const serverUrl = '/test'
const xhr = new XMLHttpRequest()
xhr.open('GET', serverUrl, true)
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.response);
  } else {
    console.error(this.statusText)
  }
}
xhr.onerror = function () {
  console.error(this.statusText)
}
// 设置响应数据类型
xhr.responseType = 'json'
// 设置请求头
xhr.setRequestHeader('Accept', 'application/json')
// 发送请求
xhr.send(null)


// 封装成Promise
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.onerror = function() {
      reject(new Error(this.statusText))
    }
    // 设置响应数据类型
    xhr.responseType = 'json'
    // 设置请求头
    xhr.setRequestHeader('Accept', 'application/json')
    // 发送请求
    xhr.send(null)
  })
}