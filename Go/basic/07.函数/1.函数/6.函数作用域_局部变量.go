package main

import "fmt"

func TestA() {
	a := 6 // 局部变量变化未影响外层作用域的
	a++
}
func main() {
	a := 10 // 这里用的是:= 类型推断，相当于声明了变量了
	TestA()
	fmt.Println(a) // 10
}
