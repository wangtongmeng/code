package main

import "fmt"

func TestSum(args ...int) {
	// args参数可以认为就是一个集合
	fmt.Println(args, args[0]) // [3 6 7 10] 3
	// 获取参数个数
	fmt.Println(len(args)) // 4
	// 可以遍历
	for i := 0; i < len(args); i++ {
		fmt.Println(args[i]) // 3 6 7 10
	}
	// 通过range遍历
	for i, v := range args {
		fmt.Println(i) // 0 1 2 3  存储的是集合的编号
		fmt.Println(v) // 3 6 7 10 存储的是具体的值。
	}
	// 如果只写一个变量，该变量中存储的是集合的编号
	for v := range args {
		fmt.Println(v) // 0 1 2 3
	}
	// _：匿名变量不会保存具体的数据
	for _, v := range args {
		fmt.Println(v) // 3 6 7 10
	}
}

// 固定参数放在前面，不定参数放在后面
func TestA(num int, args ...int) {
	fmt.Println(num)                    // 10
	fmt.Println(args, args[0], args[1]) // [8 9] 8 9
}
func main() {
	TestSum(3, 6, 7, 10)
	TestA(10, 8, 9)
}
