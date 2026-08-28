package main

import (
	"fmt"
	"sync"
	"time"
)

// 读写锁
// 锁本质上是将并行代码串行化，会降低性能
// 设计锁时，尽量保证并行
// 两组协程，一组读，一组写，web系统中读多写少

func main() {
	//var num int
	var rwLock sync.RWMutex
	var wg sync.WaitGroup

	wg.Add(11)

	// 写的goroutine
	go func() {
		defer wg.Done()
		time.Sleep(3 * time.Second)
		rwLock.Lock() // 写锁， 会防止其他写锁获取和读锁获取
		fmt.Println("get write lock")
		time.Sleep(time.Second * 2)
		rwLock.Unlock()
	}()

	time.Sleep(time.Second)

	// 读的goroutine
	for i := 0; i < 5; i++ {
		go func() {
			defer wg.Done()
			for j := 0; j < 10; j++ { // 限制循环次数,避免无限循环
				rwLock.RLock() // 读锁， 会防止其他写锁获取，但不会阻止其他读锁获取
				fmt.Println("get read lock")
				time.Sleep(time.Millisecond * 500)
				rwLock.RUnlock() // 手动释放锁,不使用defer
			}
		}()
	}

	wg.Wait()

}
