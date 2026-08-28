package main

import (
	"fmt"
	"time"
)

func asyncPrint() {
	time.Sleep(time.Second)
	fmt.Println("普通goroutine")
}

// 主协程
func main() {
	// 启动协程，执行异步打印，不会阻塞主协程
	// 主协程死亡，协程也会死亡
	go asyncPrint()
	fmt.Println("main goroutine")
	time.Sleep(2 * time.Second)
}

/**
输出：
	main goroutine
	普通goroutine
*/
