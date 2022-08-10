// implements 检查class是否满足interface

interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable { //  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.ts(2420)
  pong() {
    console.log("pong!");
  }
}

// class 实现多interface class C implements A, B {.

interface Animal {
  sex: string
}
interface People {
  eat(): void
}
class Person implements Animal, People {
  sex: 'male'
  eat(){}
}