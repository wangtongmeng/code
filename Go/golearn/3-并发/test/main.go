package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

/*
context withValue
*/
var wg sync.WaitGroup

func cpuInfo(ctx context.Context) {
	// 这里能拿到一个请求的id
	fmt.Printf("traceid: %s\r\n", ctx.Value("traceid"))
	// 记录一些日志，这次请求是哪个traceid打印的
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
	ctx, _ := context.WithTimeout(context.Background(), 6*time.Second) // context.Background()是父ctx

	valueCtx := context.WithValue(ctx, "traceid", "sdfsfd")

	go cpuInfo(valueCtx)
	wg.Wait()
	fmt.Println("监控完成")
}

/*
traceid: sdfsfd
cpu info
cpu info
cpu info
退出cpu监控
监控完成


*/
