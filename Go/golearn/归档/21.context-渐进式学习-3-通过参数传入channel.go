package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

// 如何能主动退出监控程序，
// 用channel来控制退出，父goroutine给子goroutine发取消、超时、传值等消息，就是context
// context包提供了三种函数，WithCancel，WithTimeout，WithValue
// 如果你的goroutine，函数中，希望被控制，超时、传值，但是我不希望影响原来的接口信息时，函数参数中第一个参数就尽量的要加上一个ctx
var wg sync.WaitGroup

func cpuInfo(ctx context.Context) { // 1. 参数传递ctx
	defer wg.Done()
	for {
		select {
		//case <-stop: // 6. 删掉
		case <-ctx.Done(): // 7.监控ctx.Done()返回的channel，当调用cancel就能立马收到
			fmt.Println("退出cpu监控")
			return
		default:
			time.Sleep(2 * time.Second)
			fmt.Println("cpu info")
		}
	}
}

func main() {
	//var stop = make(chan struct{}) // 5.删掉

	// 有一个goroutine监控cpu信息
	wg.Add(1)
	ctx, cancel := context.WithCancel(context.Background()) // 2.context.WithCancel接收父的context context是树形结构
	go cpuInfo(ctx)                                         // 2.传入ctx
	time.Sleep(6 * time.Second)
	//stop <- struct{}{} // 3. 删掉
	cancel() // 4.调用cancel
	wg.Wait()
	fmt.Println("监控完成")
}

/*
cpu info
cpu info
cpu info
退出cpu监控
监控完成


*/
