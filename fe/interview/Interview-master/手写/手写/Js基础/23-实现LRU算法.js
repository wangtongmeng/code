class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // 缓存容量
    this.cache = new Map(); // 使用 Map 存储缓存数据
  }

  get(key) {
    if (this.cache.has(key)) {
      // 如果缓存中存在指定的 key，则将其移到最前面表示最近使用
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    // 缓存中不存在指定的 key
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // 如果缓存中已存在指定的 key，则更新其值，并将其移到最前面表示最近使用
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // 缓存已满，需要淘汰最久未使用的数据（即最后一个数据）
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    // 将新数据添加到缓存最前面表示最近使用
    this.cache.set(key, value);
  }
}
