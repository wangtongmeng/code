package main

import "fmt"

// 全局变量，不能用 :=

// var简写
var (
	name = "li4"
	age  = 18
	ok   bool
)

func main() {
	// 1.变量必须先定义后使用 2.变量必须有类型 3.类型定下来后不能改变
	// 定义变量的方式
	// 方式1
	var name1 int
	name1 = 1

	// 方式2
	var name2 = 1

	// 方式3
	name3 := 1

	fmt.Println(name1, name2, name3)

	// 2.多变量定义
	var user1, user2, user3 = "li4", 1, "li4"
	fmt.Println(user1, user2, user3)

	/**
	注意：
		变量必须先定义后使用
		go语言是静态语言，要求变量的类型和赋值类型一致
		变量名不要冲突
		:= 不能用于全局变量
		变量是有零值，也就是默认值
		定义了变量一定要使用，否则会报错
	*/
}
