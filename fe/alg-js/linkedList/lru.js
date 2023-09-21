// LRU是Least Recently Used的缩写，即最近最少使用
// let cache = new Map()
// cache.set('a', 1)
// cache.set('b', 2)
// cache.set('c', 3)
// console.log(cache.keys()); // [Map Iterator] { 'a', 'b', 'c' } 是个迭代器，类似链表
// console.log(cache.keys().next().value); // a 

class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.max = capacity
  }
  // 获取值
  get(key) {
    // 获取值，则把值排在最前面
    if (this.cache.has(key)) {
      let tmp = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, tmp)
      return tmp
    }
  }
  // 插入值
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.max) {
      // 新增就要有缓存的淘汰机制
      this.cache.delete(this.cache.keys().next().value) // 淘汰最后一个（也就是最左边的）
    }
    this.cache.set(key, value)
  }
  print(){
    console.log(this.cache.keys());
  }
}

let lruCahe = new LRUCache(3)

lruCahe.put('a' , 1)
lruCahe.print()
lruCahe.put('b' , 2)
lruCahe.print()
lruCahe.put('c' , 3)
lruCahe.print()
lruCahe.get('b')
lruCahe.print()
lruCahe.put('d' , 4)
lruCahe.print()


// [Map Iterator] { 'a' }
// [Map Iterator] { 'a', 'b' }
// [Map Iterator] { 'a', 'b', 'c' }
// [Map Iterator] { 'a', 'c', 'b' }
// [Map Iterator] { 'c', 'b', 'd' }



