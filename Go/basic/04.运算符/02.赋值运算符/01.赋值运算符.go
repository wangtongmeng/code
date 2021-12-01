package main

import "fmt"

func main() {
	var num int = 10
	num += 10 // num = num + 10
	fmt.Println(num) // 20
	num -= 5
	fmt.Println(num) // 15
	num *= 3
	fmt.Println(num) // 45
	num /= 3
	fmt.Println(num) // 15
	num %= 2
	fmt.Println(num) // 1

	//运算符优先级
	// 算术运算符>赋值运算符
	var num1 int = 10
	num1 %= 2+3 // 0  相当于num%=5 等于0
}
