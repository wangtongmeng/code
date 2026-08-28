package main

import "fmt"

func deferReturn() (ret int) {
	defer func() {
		ret++
	}()
	return 10
}

func main() {
	// 连接数据库、打开文件、开始锁，最后都需要关闭数据库、关闭文件、解锁

	// defer可以解决对应操作离太远的问题
	//var mu sync.Mutex
	//mu.Lock()
	//defer mu.Unlock() // defer后面的代码会放在函数return之前执行

	// 多个defer为栈结构
	//defer fmt.Println("1")
	//defer fmt.Println("2")
	//fmt.Println("main")
	// 打印顺序 main 2 1
	// 原因是多个defer存储为栈结构，后进先出

	// defer有能力修改返回值
	ret := deferReturn()
	fmt.Println(ret) // 11
}
