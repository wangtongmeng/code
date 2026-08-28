package main

import (
	"sync/atomic"
)

var total int32

// atomic可以保证并发安全，使用场景：计数器、状态标识、取余操作、自增操作等

func add() {
	for i := 0; i < 100000; i++ {
		atomic.AddInt32(&total, 1)
	}
}

func sub() {
	for i := 0; i < 100000; i++ {
		atomic.AddInt32(&total, -1)
	}
}

func main() {
	go add()
	go sub()
	println(total) // 0
}
