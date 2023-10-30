function ajax(url) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.response);
    } else {
      console.log(this.statusText);
    }
  }
  xhr.onerror = function () {
    console.log(this.statusText);
  }
  xhr.responseType = 'json'
  xhr.setRequestHeader("Accept", 'application/json')
  xhr.send(null)
}