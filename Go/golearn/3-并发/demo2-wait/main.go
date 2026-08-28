package main

import (
	"fmt"
	"sync"
)

// 子goroutine和主goroutine通信，通知结束
// waitgroup主要用于goroutine的执行等待，Add和Done方法成对使用

func main() {
	var wg sync.WaitGroup
	// 要监控goroutine数量
	wg.Add(100)
	for i := 0; i < 100; i++ {
		go func(i int) {
			defer wg.Done()
			fmt.Println(i)
		}(i)
	}

	wg.Wait()
	fmt.Println("end")
}
