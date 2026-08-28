package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func cpuInfo(ctx context.Context) { // 1. 参数传递ctx
	defer wg.Done()
	for {
		select {
		case <-ctx.Done():
			fmt.Println("退出cpu监控")
			return
		default:
			time.Sleep(2 * time.Second)
			fmt.Println("cpu info")
		}
	}
}

func main() {
	wg.Add(1)
	ctx1, cancel1 := context.WithCancel(context.Background())
	ctx2, _ := context.WithCancel(ctx1)
	go cpuInfo(ctx2) // 1.传入的是子ctx
	time.Sleep(6 * time.Second)
	cancel1() // 2.调用的是父ctx的cancel也是可以的
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
