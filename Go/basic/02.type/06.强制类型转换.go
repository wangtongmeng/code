package main

import "fmt"

func main() {
	// 浮点类型->整型
	var num float64 = 3.15
	fmt.Printf("%d\n", int(num)) // 3
	// 整型 -> 浮点类型
	var num1 int = 20
	fmt.Printf("%f", float64(num1)) // 20.000000

	var num2 float32 = 5.8 // 在类型转换时，低类型转换成高类型，保证数据类型精度
	var num3 float64 = 6.6
	fmt.Printf("%.2f\n", float64(num2)+num3) // 12.40

	// 数据溢出
	var num4 int = 1234
	fmt.Printf("%d", int8(num4)) // -46 int8取值范围 -128~127 所以数据溢出了
}
