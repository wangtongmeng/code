package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

// atomic 可以将加/减操作原子化。atomic性能更高，不如lock灵活，lock可以锁住代码段
var total int32
var wg sync.WaitGroup
var lock sync.Mutex

func add() {
	defer wg.Done()
	for i := 0; i < 100000; i++ {
		atomic.AddInt32(&total, 1)
	}
}
func sub() {
	defer wg.Done()
	for i := 0; i < 100000; i++ {
		atomic.AddInt32(&total, -1)
		//lock.Lock() // 需要是同一个锁
		//total -= 1
		//lock.Unlock()
	}
}
func main() {
	wg.Add(2)
	go add()
	go sub()
	wg.Wait()
	fmt.Println(total)
}

/**
输出：
0
*/
