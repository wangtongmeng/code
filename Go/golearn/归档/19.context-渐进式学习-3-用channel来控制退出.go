package main

import (
	"fmt"
	"sync"
	"time"
)

// 如何能主动退出监控程序，
// 用channel来控制退出，代替共享变量
var wg sync.WaitGroup
var stop = make(chan struct{})

func cpuInfo() {
	defer wg.Done()
	for {
		select {
		case <-stop:
			fmt.Println("退出cpu监控")
			return
		default:
			time.Sleep(2 * time.Second)
			fmt.Println("cpu info")
		}
	}
}

func main() {
	// 渐进式方式
	// 有一个goroutine监控cpu信息
	wg.Add(1)
	go cpuInfo()
	time.Sleep(6 * time.Second)
	stop <- struct{}{}
	wg.Wait()
	fmt.Println("监控完成")
}

/*
cpu info
cpu info
cpu info
cpu info
退出cpu监控
监控完成


*/
