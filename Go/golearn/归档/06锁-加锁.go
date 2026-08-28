package main

import (
	"fmt"
	"sync"
)

// 多个goroutine修改共享变量，使用互斥锁
// 锁 - 解决资源竞争问题

// 这里用到的是互斥锁

var total int
var wg sync.WaitGroup
var lock sync.Mutex

func add() {
	defer wg.Done()
	for i := 0; i < 100000; i++ {
		lock.Lock()
		total += 1 // 这样，读、计算、写，是原子操作
		lock.Unlock()
	}
}
func sub() {
	defer wg.Done()
	for i := 0; i < 100000; i++ {
		lock.Lock() // 需要是同一个锁
		total -= 1
		lock.Unlock()
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
