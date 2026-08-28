package main

import (
	"fmt"
	"time"
)

// python、java、php 多线程编程、多进程编程，多线程和多进程的存在的问题主要是耗费内存

//内存、线程切换，web2.0，用户机线程，绿程，轻量级线程、协程，asyncio-python php-swoole java - netty
// 协程特点：内存占用小（2K）、切换快
// go只有协程

func asyncPrint() {
	time.Sleep(time.Second)
	fmt.Println("普通goroutine")
}

// main函数是主协程
func main() {
	go asyncPrint()
	// 匿名函数启动goroutine
	go func() {
		time.Sleep(time.Second)
		fmt.Println("匿名函数启动goroutine")
	}()
	// 启动多个协程，会并发执行
	for i := 0; i < 10; i++ {
		go func(i int) { // 能保证goroutine不会重复，但是goroutine执行顺序不确定
			fmt.Println(i)
		}(i)
	}

	fmt.Println("main goroutine")
	time.Sleep(2 * time.Second)

}
