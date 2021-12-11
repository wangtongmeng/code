package main

import "fmt"

func main() {
	const PI float64 = 3.14
	fmt.Printf("%.2f", PI) // 3.14
	//PI = 3.15 // 不允许修改常量的值
	//fmt.Printf("%p", &PI) // 不允许打印常量的地址
	const PI2 = 3.14 // 类型通过赋值确定
	fmt.Printf("%.2f", PI) // 3.14
}