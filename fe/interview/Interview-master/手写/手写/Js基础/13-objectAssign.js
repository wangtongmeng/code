function assign(target, ...sources) {
  for (let source of sources) {
    for (let key of source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}
