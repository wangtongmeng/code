package main

import "fmt"

func main() {
	// 自动推导类型
/*	num := 10 // 少写了var int
	a, b, c := 12, 13, 14
	fmt.Println(num) // 10
	fmt.Println(a,b,c) // 12, 13, 14*/

	// 案例 交换两个变量的值
	num1:=10
	num2:=20
	num1,num2=num2,num1
	fmt.Println(num1,num2) // 20 10
}