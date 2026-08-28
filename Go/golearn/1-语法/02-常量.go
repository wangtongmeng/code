package main

import "fmt"

func main() {
	// 常量 定义时指定的值，不能修改
	const PI float32 = 3.14 // 显示定义
	const PI2 = 3.14        // 隐式定义

	const (
		UNKOWN = 1
		FEMALE = 2
		MALE   = 3
	)
	/*
		常量类型只可以定义 boll、数值(整数、浮点数和复数) 和 字符串
		不曾使用的常量，没有强制使用的要求
		显示指定类型时，必须确保常量左右值类型一致
	*/

	const (
		x int = 16
		y
		s = "abc"
		z
		m
	)
	fmt.Println(x, y, s, z, m) // 16 16 abc abc abc

}
