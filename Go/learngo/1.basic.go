package main

import (
	"fmt"
	"math"
	"math/cmplx"
)

/**
变量定义

使用var关键字
- var a, b, c bool
- var s1, s2 string = "hello", "world"
- 可放在函数内， 或直接放在包内
- 使用var()集中定义变量
让编译器自动决定类型
- var a, b, i, s1, s2 = true, false, 3, "hello", "world"
使用:=定义变量
- a, b, i, s1, s2 := true, false, 3, "hello", "world"
- 只能在函数内使用

内建变量类型
- bool, string
- 整数类型 (u)int, (u)int8, (u)int16, (u)int32, (u)int64, uintptr 指针
- byte, rune 字符型（go语言的char类型）
- 浮点数类型 float32, float64, 复数类型（实部 虚部）complex64, complex128

强制类型转换
- 类型转换是强制的
- var a, b int = 3, 4

常量定义
- const filename = "abc.txt"
- const 数值可作为各种类型使用

使用常量定义枚举类型
- 普通枚举类型
- 自增值枚举类型

变量定义要点回顾
- 变量类型写在变量名之后
- 编译器可推测变量类型
- 没有char，只有rune
- 原生支持复数类型
*/

var aa = 3
var ss = "kkk"

//bb := true  函数外面不能使用:=

var ( // 节省var
	a = 1
	b = "k"
)

func variableZeroValue() {
	// 只声明变量
	var a int
	var s string
	fmt.Printf("%d %q\n", a, s)  //	0 ""
}

func variableInitialValue() {
	// 声明变量并赋值
	var a, b int = 3, 4 // 变量可以同时定义多个
	var s string = "abc"
	fmt.Println(a, b, s) // 3 4 abc
}

// 类型推断
func variableTypeDeduction() {
	var a, b, c, s = 3, 4, true, "def"
	fmt.Println(a, b, c, s) // 3 4 true def
}

// 定义并赋值变量 简单方法 := (只能在函数内使用)
func variableShorter() {
	a, b, c, s := 3, 4, true, "def"
	fmt.Println(a, b, c, s) // 3 4 true def
}

// 验证欧拉公式
func euler() {
	//c := 3 + 4i
	//fmt.Println(cmplx.Abs(c)) // 5
	fmt.Println(cmplx.Pow(math.E, 1i * math.Pi) + 1) // 1i 让go知道是虚数
	fmt.Println(cmplx.Exp(1i * math.Pi) + 1) // (0+1.2246467991473515e-16i) 浮点数不准
	fmt.Printf("%.3f\n", cmplx.Exp(1i * math.Pi) + 1) // (0.000+0.000i) 这个就是0了
}

// 强制类型转换
func triangle() {
	var a, b int = 3, 4
	var c int
	c = int(math.Sqrt(float64(a*a + b*b)))
	fmt.Println(c) // 5
}

// 常量定义 使用const关键字
func consts() {
	const filename = "abc.txt"
	const a, b = 3, 4 // 如果没加类型，常量的类型是不确定的
	var c int
	c = int(math.Sqrt(a*a + b*b))
	fmt.Println(filename, c)
	// 其他规则和变量一致
}

// 枚举类型 特殊的常量
func enums() {
	const (
		//cpp    = 0
		//java   = 1
		//python = 2
		//golang = 3
		// 自增值
		cpp = iota
		java
		python
		golang
	)

	const (
		b = 1 << (10 * iota)
		kb
		mb
		gb
		tb
		pd
	)
	fmt.Println(cpp, java, python, golang) // 0 1 2 3
	fmt.Println(b, kb, mb, gb, tb, pd) // 1 1024 1048576 1073741824 1099511627776 1125899906842624
}

func main() {
	fmt.Println("Hello world")
	variableZeroValue()
	variableInitialValue()
	variableTypeDeduction()
	variableShorter()

	euler()
	triangle()
	consts()
	enums()
}
