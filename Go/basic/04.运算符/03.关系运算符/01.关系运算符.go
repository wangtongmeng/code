package main

import "fmt"

func main() {
	var num1 int = 10
	var num2 int = 20
	fmt.Println(num1==num2) // false
	fmt.Println(num1!=num2) // true
	fmt.Println(num1>num2) // false
	fmt.Println(num1<num2) // true
	fmt.Println(num1>=num2) // false
	fmt.Println(num1<=num2) // true

	// 运算符优先级
	// 算术运算符>关系运算符>赋值运算符
	sum := num1 + 20 > num2
	fmt.Println(sum) // true
}
