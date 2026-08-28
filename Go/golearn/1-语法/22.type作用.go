package main

import (
	"fmt"
	"strconv"
)

type MyInt2 int

func (mi MyInt2) string() string {
	return strconv.Itoa(int(mi))
}
func main() {
	// type 关键字
	/**
	1.定义结构体
	2.定义接口
	3.定义类型别名  更好理解代码
	4.类型定义 基于已有的类型自定义一个类型
	*/

	// 类型别名
	type MyInt = int
	var i MyInt = 12
	var j int = 8
	fmt.Println(i + j)      // 20 在编译时，类型别名会被直接替换为int
	fmt.Printf("%T\r\n", i) // int

	// 类型定义
	type MyInt1 int
	var i1 MyInt1 = 12
	var j1 int = 8
	fmt.Println(int(i1) + j1) // 强制类型转换
	fmt.Printf("%T\r\n", i1)  // main.MyInt1

	// 自定义类型 扩展
	var i2 MyInt2 = 12
	fmt.Println(i2.string()) // 12

	// switch 获取真正类型
	var a interface{} = "abc"
	switch a.(type) { // 获取真正类型
	case string:
		fmt.Println("a string") // a string
	}

}
