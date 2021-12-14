package main

import "fmt"

func main() {
	defer fmt.Println("起床")
	defer fmt.Println("睡觉")
	defer fmt.Println("打豆豆")

}

// 打豆豆 多个defer会采用后进先出的栈形式执行
// 睡觉
// 起床
