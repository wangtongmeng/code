package main

import "fmt"

func main() {
	var num1 int = 10
	var num2 int = 20
	isResult := num1 > num2
	fmt.Println(isResult) // false
	fmt.Println((!isResult)) // trueb
	//fmt.Println(!num1 > num2) // 逻辑非后面的变量是布尔类型；逻辑非的运算优先级高于关系运算符
	fmt.Println(!(num1 > num2)) // true 括号的优先级高于逻辑非
	// 逻辑与
	fmt.Println(num1>num2 && num1 == 10) // false 逻辑与运算符优先级低于关系运算符
	// 逻辑或
	fmt.Println(num1>num2 || num1 == 10) // true 逻辑或运算符优先级低于关系运算符

	fmt.Println(num1 < num2 || num1 > num2 && num1 != 10) // true 逻辑与的优先级高于逻辑或
}
