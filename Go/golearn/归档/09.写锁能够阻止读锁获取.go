package main

import (
	"fmt"
	"sync"
	"time"
)

// 读写锁
// 写锁能够阻止读锁获取
func main() {
	var rwlock sync.RWMutex
	var wg sync.WaitGroup

	wg.Add(6)
	// 写的gorutine
	go func() {
		time.Sleep(3 * time.Second)
		defer wg.Done()

		rwlock.Lock() // 加写锁，写锁会防止别的写锁获取和读锁获取
		defer rwlock.Unlock()
		fmt.Println("get write lock")
		time.Sleep(2 * time.Second)
	}()

	// 读的goroutine
	for i := 0; i < 5; i++ {
		go func() {
			defer wg.Done()
			for {
				rwlock.RLock() // 加读锁，读锁不会阻止别人读
				time.Sleep(500 * time.Millisecond)
				fmt.Println("get read lock")
				rwlock.RUnlock()
			}
		}()
	}

	wg.Wait()
}
