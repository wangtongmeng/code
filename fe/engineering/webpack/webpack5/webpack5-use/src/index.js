function readonly(target, key, descriptor) {
  // eslint-disable-next-line no-param-reassign
  descriptor.writable = false;
}

class Person {
  @readonly PI = 3.14;
}
 const p1 = new Person();
  p1.PI = 3.15;
