class LRUCache {
  length;
  data = new Map();
  constructor(length) {
    if (length < 1) {
      throw new Error("invalid length");
    }
    this.length = length;
  }
  set(key, value) {
    const data = this.data;
    if (data.has(key)) {
      data.delete(key);
    }
    data.set(key, value);
    if (data.size > this.length) {
      // 超出容量时，则删除 Map 中最老的元素
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }
  get(key) {
    const data = this.data;
    if (!data.get(key)) return null;
    const value = data.get(key);
    data.delete(key);
    data.set(key, value);
    return value;
  }
}

const lruCache = new LRUCache(2);
lruCache.set(1, 1); // {1=1}
lruCache.set(2, 2); // {1=1, 2=2}
console.info(lruCache.get(1)); // 1 {2=2, 1=1}
lruCache.set(3, 3); // {1=1, 3=3}
console.info(lruCache.get(2)); // null
lruCache.set(4, 4); // {3=3, 4=4}
console.info(lruCache.get(1)); // null
console.info(lruCache.get(3)); // 3 {4=4, 3=3}
console.info(lruCache.get(4)); // 4 {3=3, 4=4}
