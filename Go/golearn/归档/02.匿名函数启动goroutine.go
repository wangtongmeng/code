package main

import (
	"fmt"
	"time"
)

//func asyncPrint() {
//	for {
//		time.Sleep(time.Second)
//		fmt.Println("普通goroutine")
//	}
//}
//
//func main() {
//	go asyncPrint()
//	fmt.Println("main goroutine")
//	time.Sleep(10 * time.Second) // 10秒后退出
//}

func main() {
	go func() {
		// 匿名函数启动goroutine
		for {
			time.Sleep(time.Second)
			fmt.Println("普通goroutine")
		}
	}()
	fmt.Println("main goroutine")
	time.Sleep(10 * time.Second) // 10秒后退出
}

/**
输出：
main goroutine
普通goroutine
普通goroutine
普通goroutine
普通goroutine
普通goroutine
普通goroutine
普通goroutine
普通goroutine
普通goroutine

进程 已完成，退出代码为 0
*/
