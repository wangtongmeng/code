package main

import "fmt"

func main() {
	var num float64
	var num1 float64
	num = 123.45
	num1 = 123.4567
	fmt.Printf("%f\n", num) // 123.450000
	fmt.Printf("%.2f\n", num1) // 123.46 保留两位小数 同时四舍五入
	// 给变量赋值浮点类型，会类型推导
	num2:=11.12
	fmt.Printf("%T", num2) // float64 自动推导的类型是float64
}
