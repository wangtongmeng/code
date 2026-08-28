package main

import (
	"fmt"
	"sync"
	"time"
)

// 读写锁
// 锁本质上是将并行的代码串行化了，使用lock肯定会影响性能
// 即使是设计锁，那么也应该尽量的保证并行
// 我们有两组数据，其中一组负责写数据，另一组负责读数据，web系统中绝大部分场景都是读多写少，
// 多个goroutine，读协程之间可以并发，读和写之间应该串行，读和读之间也不应该并行

func main() {
	var num int
	var rwlock sync.RWMutex
	var wg sync.WaitGroup

	wg.Add(2)
	// 写的gorutine
	go func() {
		defer wg.Done()
		rwlock.Lock() // 加写锁，写锁会防止别的写锁获取和读锁获取
		defer rwlock.Unlock()
		num = 12
	}()

	time.Sleep(time.Second) // 这里用时间延迟，避免goroutine通信

	// 读的gorutine
	go func() {
		defer wg.Done()
		rwlock.RLock() // 加读锁，读锁不会阻止别人读
		defer rwlock.RUnlock()
		fmt.Println(num)
	}()

	wg.Wait()
}
