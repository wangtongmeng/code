package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func cpuInfo() {
	for {
		time.Sleep(2 * time.Second)
		fmt.Println("cpu info")
	}
}

func main() {
	// 渐进式方式
	// 有一个goroutine监控cpu信息
	wg.Add(1)
	go cpuInfo()
	wg.Wait()
	fmt.Println("监控完成")
}

// 每隔2s打印一次cpu信息
