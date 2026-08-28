package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

// cpuInfo 模拟一个 CPU 监控 goroutine
func cpuInfo(ctx context.Context) {
	defer wg.Done()
	for {
		select {
		case <-ctx.Done():
			fmt.Println("退出cpu监控")
			return
		default:
			time.Sleep(2 * time.Second)
			fmt.Println("cpu的信息")
		}
	}
}

func main() {
	// 有一个 goroutine 监控 cpu 的信息
	wg.Add(1)

	// 创建可取消的 context
	ctx, cancel := context.WithCancel(context.Background())

	go cpuInfo(ctx)

	time.Sleep(6 * time.Second)
	cancel()
	wg.Wait()
	fmt.Println("监控完成")
}
